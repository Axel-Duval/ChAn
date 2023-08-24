import { styled } from "../../../theme";

export const Wrapper = styled.main`
  color: ${(props) => props.theme.color.muted};
  font-family: ${(props) => props.theme.font.family.primary}, sans-serif;
  font-weight: ${(props) => props.theme.font.weight.regular};
  font-size: ${(props) => props.theme.font.size.md};
  line-height: calc(
    ${(props) => props.theme.font.size.xs} +
      ${(props) => props.theme.font.size.xs}
  );
  height: 100vh;
  width: 80vw;
  margin-left: 10vw;
  cursor: default;
  display: flex;
`;
Wrapper.displayName = "Wrapper";

export const MessagesWrapper = styled.ol`
  list-style: none;
  background: none;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
MessagesWrapper.displayName = "WrapperMessages";
