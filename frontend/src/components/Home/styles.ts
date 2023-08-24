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
  cursor: default;
  padding: 0 10vw;

  @media only screen and (min-width: 768px) {
    padding: 0 25vw;
  }
`;
Wrapper.displayName = "Wrapper";

export const Picture = styled.img`
  position: absolute;
  z-index: 0;

  top: 0;
  left: 0%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    top: 0;
    left: 35%;
    width: clamp(300px, 50vw, 600px);
  }
`;
