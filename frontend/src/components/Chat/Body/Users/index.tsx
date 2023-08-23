import { ListItem } from "../../../../common/styles";
import { StoredSocketData } from "../../../../common/types/sockets";
import { UsersList, UsersWrapper } from "./styles";

interface IProps {
  users: StoredSocketData[];
}

export const ChatUsers = ({ users }: IProps) => {
  return (
    <UsersWrapper>
      <UsersList>
        {users.map((u) => (
          <ListItem key={u.id} style={{ color: u.color }}>
            <div>{u.username}</div>
          </ListItem>
        ))}
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>Axelze</ListItem>
        <ListItem>LOL</ListItem>
      </UsersList>
    </UsersWrapper>
  );
};
