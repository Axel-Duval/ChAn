import { List } from "../../../../common/styles";
import { styled } from "../../../../theme";

export const UsersWrapper = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: ${(props) => props.theme.space.md};
  flex: 1;
`;
UsersWrapper.displayName = "UsersWrapper";

export const UsersList = styled(List)`
  display: flex;
  gap: ${(props) => props.theme.space.sm};
  flex-direction: row;
  height: auto;
  flex-wrap: wrap;
`;
UsersList.displayName = "UsersList";
