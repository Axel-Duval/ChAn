import { styled } from "../../../theme";

export const Wrapper = styled.main`
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
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
Wrapper.displayName = "Wrapper";

export const MessagesWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
MessagesWrapper.displayName = "WrapperMessages";
