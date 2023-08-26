import CryptoJS from "crypto-js";
import React from "react";
import { FormattedMessage, Message } from "../../../../common/types/messages";
import { StoredSocketData } from "../../../../common/types/sockets";
import { ChatContext } from "../../../../context";
import { theme } from "../../../../theme";
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

const ENCRYPTED_CONTENT = "******";
const LOGGED_OUT_USER = {
  id: "out",
  color: theme.color.ultra,
  username: "left user",
};

export const ChatMessages = ({ messages, self, getById }: IProps) => {
  const [copy, setCopy] = React.useState<number | null>(null);
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
        try {
          const content = CryptoJS.AES.decrypt(m.content, key).toString(
            CryptoJS.enc.Utf8
          );
          return {
            content: content.length > 0 ? content : ENCRYPTED_CONTENT,
            at: new Date(m.at),
            user: user ? user : LOGGED_OUT_USER,
          };
        } catch (error) {
          return null;
        }
      })
      .filter((m) => !!m) as FormattedMessage[];
  }, [messages, getById, key]);

  React.useEffect(() => {
    if (copy !== null) {
      const t = setTimeout(() => setCopy(null), 1000);
      return () => clearTimeout(t);
    }
  }, [copy]);

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
              copied={copy === i}
              onClick={() => {
                navigator.clipboard.writeText(m.content);
                setCopy(i);
              }}
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
