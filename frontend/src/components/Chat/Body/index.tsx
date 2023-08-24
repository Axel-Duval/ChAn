import React from "react";
import { ChatContext } from "../../../context";
import { useSockets } from "../../../hooks/useSockets";
import { ChatForm } from "./Form";
import { ChatMessages } from "./Messages";
import { ChatSettings } from "./Settings";
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
      {/* <MessagesWrapper>
        <ChatMessages messages={messages} getById={getById} />
        <ChatForm sendMessage={sendMessage} />
      </MessagesWrapper>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "20px 0" }}
      >
        <ChatUsers users={all} />
        <ChatSettings sendColor={sendColor} />
      </div> */}
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
              gap: "10px",
            }}
          >
            <ChatForm sendMessage={sendMessage} />
            <ChatSettings sendColor={sendColor} />
          </footer>
        </div>
      </div>
      <aside style={{ flex: 0.25 }}>
        <ol
          style={{
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden",
            display: "flex",
            flexWrap: "wrap",
            gap: "4px",
          }}
        >
          <li style={{ padding: "10px" }}>Hello World</li>
          <li>Hello World</li>
        </ol>
      </aside>
    </Wrapper>
  );
};
