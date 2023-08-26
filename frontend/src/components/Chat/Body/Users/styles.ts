import { styled } from "../../../../theme";

export const UsersWrapper = styled.aside`
  flex: 0.25;
  margin: 20px 10px;
`;
UsersWrapper.displayName = "UsersWrapper";

export const UsersList = styled.ol`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: row-reverse;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;
UsersList.displayName = "UsersList";

export const UserChip = styled.div`
  font-family: ${(props) => props.theme.font.family.secondary}, sans-serif;
  font-size: ${(props) => props.theme.font.size.md};
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.sm};
  border: solid 1px ${(props) => props.theme.color.ultra};
  color: ${(props) => props.color};
  border-radius: 2px;
`;
