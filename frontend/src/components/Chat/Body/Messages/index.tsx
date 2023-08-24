import CryptoJS from "crypto-js";
import React from "react";
import { FormattedMessage, Message } from "../../../../common/types/messages";
import { StoredSocketData } from "../../../../common/types/sockets";
import { ChatContext } from "../../../../context";
import {
  List,
  MessageContent,
  MessageItem,
  MessageMeta,
  Wrapper,
} from "./styles";

interface IProps {
  messages: Message[];
  self: StoredSocketData | undefined;
  getById: (id: string) => StoredSocketData | undefined;
}

export const ChatMessages = ({ messages, self, getById }: IProps) => {
  const {
    state: { key },
  } = React.useContext(ChatContext);

  const ref = React.useRef<HTMLLIElement>(null);
  const refList = React.useRef<HTMLOListElement>(null);

  React.useEffect(() => {
    if (!ref.current || !refList.current) {
      return;
    }
    const { scrollHeight, scrollTop, offsetHeight } = refList.current;
    const preventScroll = scrollHeight - (scrollTop + offsetHeight) > 200;
    if (messages.length && !preventScroll) {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [messages.length]);

  const formattedMessages = React.useMemo(() => {
    return messages
      .map((m) => {
        const user = getById(m.from);
        if (!user) return null;
        const content = CryptoJS.AES.decrypt(m.content, key).toString(
          CryptoJS.enc.Utf8
        );
        return {
          content: content.length > 0 ? content : "******",
          at: new Date(m.at),
          user,
        };
      })
      .filter((m) => !!m) as FormattedMessage[];
  }, [messages, getById, key]);

  return (
    <Wrapper ref={refList}>
      <List>
        {formattedMessages.map((m, i) => (
          <MessageItem
            key={i}
            style={{
              flexDirection: m.user.id === self?.id ? "row-reverse" : "row",
            }}
          >
            <MessageContent
              color={m.user.color}
              onClick={() => navigator.clipboard.writeText(m.content)}
            >
              <MessageMeta>{m.user.username}:</MessageMeta> {m.content}
            </MessageContent>
            <MessageMeta>
              {String(m.at.getUTCHours()).padStart(2, "0")}:
              {String(m.at.getUTCMinutes()).padStart(2, "0")}
            </MessageMeta>
          </MessageItem>
        ))}
        <MessageItem ref={ref} />
      </List>
    </Wrapper>
  );
};
