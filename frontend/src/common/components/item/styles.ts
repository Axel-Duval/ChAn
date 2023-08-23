import { styled } from "../../../theme";
import { List, Paragraph } from "../../styles";

export const ItemWrapper = styled.div`
  position: relative;
  width: 150px;
`;
ItemWrapper.displayName = "ItemWrapper";

export const StyledList = styled(List)`
  margin-top: ${(props) => props.theme.space.md};
`;
StyledList.displayName = "Items.List";

export const Number = styled.p`
  font-size: ${(props) => props.theme.font.size.xl};
  font-weight: ${(props) => props.theme.font.weight.extralight};
  color: ${(props) => props.theme.color.white};
`;
Number.displayName = "Items.List.Number";

export const StyledParagraph = styled(Paragraph)`
  &:hover {
    color: ${(props) => props.theme.color.white};
  }
`;
StyledParagraph.displayName = "Paragraph[hover]";

export const StyledDivider = styled.div`
  width: 100%;
  height: 2px;
  margin: ${(props) => props.theme.space.sm} 0;
  background: -moz-linear-gradient(
    left,
    ${(props) => props.theme.color.white} 0%,
    ${(props) => props.theme.color.white} 65%,
    ${(props) => props.theme.color.ultra} 65%,
    ${(props) => props.theme.color.ultra} 100%
  );
  background: -webkit-linear-gradient(
    left,
    ${(props) => props.theme.color.white} 0%,
    ${(props) => props.theme.color.white} 65%,
    ${(props) => props.theme.color.ultra} 65%,
    ${(props) => props.theme.color.ultra} 100%
  );
  background: linear-gradient(
    to right,
    ${(props) => props.theme.color.white} 0%,
    ${(props) => props.theme.color.white} 65%,
    ${(props) => props.theme.color.ultra} 65%,
    ${(props) => props.theme.color.ultra} 100%
  );
`;
StyledDivider.displayName = "Divider";
