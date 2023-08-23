import React from "react";
import { FormattedMessage, Message } from "../../../../common/types/messages";
import { StoredSocketData } from "../../../../common/types/sockets";
import { MessageItem } from "./styles";

interface IProps {
  messages: Message[];
  getById: (id: string) => StoredSocketData | undefined;
}

export const ChatMessages = ({ messages, getById }: IProps) => {
  const formattedMessages = React.useMemo(() => {
    return messages
      .map((m) => {
        const user = getById(m.from);
        if (!user) return null;
        return {
          content: m.content,
          at: new Date(m.at),
          user,
        };
      })
      .filter((m) => !!m) as FormattedMessage[];
  }, [messages, getById]);

  return (
    <div>
      {formattedMessages.map((m, i) => (
        <MessageItem key={i} color={m.user.color}>
          {m.user.username} say:
          {m.content} at
          {m.at.getHours()}h{m.at.getMinutes()}min
          {m.user.color}:
        </MessageItem>
      ))}
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
      <p>ici</p>
    </div>
  );
};
