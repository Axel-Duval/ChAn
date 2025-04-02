import { styled } from "../../../theme";

export const Nav = styled.nav`
  position: relative;
  height: 50px;
`;
Nav.displayName = "Nav";

export const NavList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: ${(props) => props.theme.space.lg};
`;
NavList.displayName = "Nav.List";
