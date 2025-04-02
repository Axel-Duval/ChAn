import { Paragraph } from "../../../common/styles";
import { DescriptionWrapper, StyledContainer, Title } from "./styles";

export const Header = () => (
  <StyledContainer>
    <Title>
      Chat
      <br />
      Anywhere
    </Title>
    <DescriptionWrapper>
      <Paragraph>
        Welcome to a secure and user-friendly live chat application that allows
        you to communicate freely without the hassle of signups or ads. Built
        with advanced technologies like Socket.io for real-time communication,
        ChAn prioritizes your privacy and convenience.
      </Paragraph>
    </DescriptionWrapper>
  </StyledContainer>
);
