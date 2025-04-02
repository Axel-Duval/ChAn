import { Paragraph, Title1 } from "../../../common/styles";
import { Wrapper } from "./styles";

export const Description = () => (
  <Wrapper>
    <Title1>Let's go !</Title1>
    <br />
    <Paragraph>
      Enter your username and a room name; feel free to use the default options
      if you prefer. Once you're set up, you can start chatting! Customize your
      experience by choosing your own color, which will be visible to others in
      the room. Additionally, you can encrypt your messages using a symmetric
      key that you'll need to share with your peers for secure communication.
      Have fun!
    </Paragraph>
  </Wrapper>
);
