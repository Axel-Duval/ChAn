import React from "react";
import { ChatContext } from "../../../context";
import { useSockets } from "../../../hooks/useSockets";
import { ChatForm } from "./Form";
import { ChatMessages } from "./Messages";
import { ChatSettings } from "./Settings";
import { ChatUsers } from "./Users";
import { Wrapper } from "./styles";

interface IProps {
  room: string;
}

export const ChatBody = ({ room }: IProps) => {
  const {
    state: { username, color },
  } = React.useContext(ChatContext);

  const { self, all, messages, sendMessage, getById, sendColor } = useSockets({
    username,
    color,
    room,
  });

  return (
    <Wrapper>
      <div style={{ flex: 1, position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <ChatMessages messages={messages} getById={getById} self={self} />
          <footer
            style={{
              marginTop: "auto",
              marginBottom: "20px",
              width: "100%",
              display: "flex",
            }}
          >
            <ChatForm sendMessage={sendMessage} />
            <ChatSettings sendColor={sendColor} />
          </footer>
        </div>
      </div>
      <ChatUsers users={all} />
    </Wrapper>
  );
};
