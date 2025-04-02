import { styled } from "../../../theme";
import { Input, Paragraph } from "../../styles";

export const ErrorWrapper = styled.div`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.muted};
  font-family: ${(props) => props.theme.font.family.primary}, sans-serif;
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.md};
  line-height: calc(
    ${(props) => props.theme.font.size.xs} +
      ${(props) => props.theme.font.size.xs}
  );
  min-height: 100vh;
  position: relative;
  padding: 0 25%;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
ErrorWrapper.displayName = "ErrorWrapper";

export const StyledInput = styled(Input)`
  margin-left: 0;
  text-align: center;
`;

export const StyledParagraph = styled(Paragraph)`
  margin-top: ${(props) => props.theme.space.md};
`;
StyledParagraph.displayName = "Paragraph";
