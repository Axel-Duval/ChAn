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
        Nulla ornare risus in ante molestie, ut finibus est aliquet. Morbi vel
        odio porttitor, consequat orci ut, fringilla velit. Vivamus porttitor
        libero sed neque condimentum, sit amet mollis lacus auctor. In tincidunt
        magna est, sed eleifend diam eleifend quis. Quisque ornare pretium purus
        a accumsan. Maecenas elit ante, luctus eget justo porta, varius tempor
        mauris.
      </Paragraph>
    </DescriptionWrapper>
  </StyledContainer>
);
