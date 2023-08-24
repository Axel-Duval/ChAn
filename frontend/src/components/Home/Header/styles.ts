import { Container } from "../../../common/styles";
import { styled } from "../../../theme";

export const StyledContainer = styled(Container)`
  margin: 7% 0;
`;
StyledContainer.displayName = "Header";

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: clamp(1rem, 9vw, 80px);
  line-height: clamp(1rem, 9vw, 80px);
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.color.white};
  word-break: break-word;
`;
Title.displayName = "Title";

export const DescriptionWrapper = styled.div`
  margin-top: ${(props) => props.theme.space.md};
  max-width: 500px;
`;
DescriptionWrapper.displayName = "Description";
