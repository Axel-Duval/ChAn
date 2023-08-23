import { Paragraph } from "../../../common/styles";
import { styled } from "../../../theme";

export const StyledFooter = styled.footer`
  text-align: center;
`;
StyledFooter.displayName = "Footer";

export const StyledParagraph = styled(Paragraph)`
  text-align: center;
  font-size: ${(props) => props.theme.font.size.sm};
  padding: ${(props) => props.theme.space.xxl} 0;
`;
StyledParagraph.displayName = "Paragraph";
