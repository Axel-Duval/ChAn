import { List } from "../../../../common/styles";
import { styled } from "../../../../theme";

export const UsersWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  padding: ${(props) => props.theme.space.md};
`;
UsersWrapper.displayName = "UsersWrapper";

export const UsersList = styled(List)`
  display: flex;
  gap: ${(props) => props.theme.space.sm};
  flex-direction: row;
  height: auto;
  flex-wrap: wrap;
  overflow-y: auto;
`;
UsersList.displayName = "UsersList";
