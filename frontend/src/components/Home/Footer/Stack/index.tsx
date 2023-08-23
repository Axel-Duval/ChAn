import { StackItem } from "./Item";
import { Wrapper } from "./styles";

export const Stack = () => (
  <Wrapper>
    <StackItem
      src="./pictures/react.png"
      title="React.js"
      subtitles={["Open source", "Frontend framework"]}
    />
    <StackItem
      src="./pictures/socket.png"
      title="Socket.io"
      subtitles={["Javascript library", "Live communication"]}
    />
    <StackItem
      src="./pictures/node.png"
      title="Node.js"
      subtitles={["Open source", "Sockets manager"]}
    />
  </Wrapper>
);
