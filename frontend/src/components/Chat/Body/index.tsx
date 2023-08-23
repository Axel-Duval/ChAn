import React from "react";
import { ChatContext } from "../../../context";
import { useSockets } from "../../../hooks/useSockets";
import { ChatForm } from "./Form";
import { ChatMessages } from "./Messages";
import { ChatSettings } from "./Settings";
import { MessagesWrapper, Wrapper } from "./styles";
import { ChatUsers } from "./Users";

interface IProps {
  room: string;
}

export const ChatBody = ({ room }: IProps) => {
  const {
    state: { username, color },
  } = React.useContext(ChatContext);

  const { all, messages, sendMessage, getById, sendColor } = useSockets({
    username,
    color,
    room,
  });

  return (
    <Wrapper>
      <MessagesWrapper>
        <ChatMessages messages={messages} getById={getById} />
        <ChatForm sendMessage={sendMessage} />
        <ChatSettings sendColor={sendColor} />
      </MessagesWrapper>
      <ChatUsers users={all} />
    </Wrapper>
  );
};
