import { ButtonAnchor, ListItem } from "../../../common/styles";
import { Nav, NavList } from "./styles";

export const Navigation = () => (
  <Nav>
    <NavList>
      <ListItem>
        <ButtonAnchor
          href="http://github.com/Axel-Duval/ChAn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source code
        </ButtonAnchor>
      </ListItem>
    </NavList>
  </Nav>
);
