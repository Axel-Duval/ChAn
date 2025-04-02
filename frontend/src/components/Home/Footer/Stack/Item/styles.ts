import { Paragraph } from "../../../../../common/styles";
import { styled } from "../../../../../theme";

export const StyledParagraph = styled(Paragraph)`
  &:hover {
    color: ${(props) => props.theme.color.white};
  }
`;
StyledParagraph.displayName = "Paragraph[hover]";

export const StyledLogo = styled.img`
  width: ${(props) => props.theme.icon.size.xl};
`;
StyledLogo.displayName = "Logo";

export const StackItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space.sm};
`;
StackItemWrapper.displayName = "Item.Wrapper";
