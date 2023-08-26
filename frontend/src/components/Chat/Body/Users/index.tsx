import { StoredSocketData } from "../../../../common/types/sockets";
import { UserChip, UsersList, UsersWrapper } from "./styles";

interface IProps {
  users: StoredSocketData[];
}

export const ChatUsers = ({ users }: IProps) => {
  return (
    <UsersWrapper>
      <UsersList>
        {users.map((u) => (
          <li key={u.id}>
            <UserChip color={u.color}>{u.username}</UserChip>
          </li>
        ))}
      </UsersList>
    </UsersWrapper>
  );
};
