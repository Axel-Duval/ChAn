import { Container } from "../../../common/styles";
import { styled } from "../../../theme";

export const StyledContainer = styled(Container)`
  margin: 7% 0 0 10%;
`;
StyledContainer.displayName = "Header";

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.family.primary};
  font-size: 80px;
  line-height: 85px;
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.color.white};
`;
Title.displayName = "Title";

export const DescriptionWrapper = styled.div`
  margin-top: ${(props) => props.theme.space.md};
  width: 50%;
`;
DescriptionWrapper.displayName = "Description";
