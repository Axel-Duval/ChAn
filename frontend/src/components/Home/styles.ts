import { styled } from "../../theme";

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
`;
Wrapper.displayName = "Wrapper";

export const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 35%;
  width: 30%;
  z-index: 0;
`;
