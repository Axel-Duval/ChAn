import { Socket } from "socket.io-client";
import { StoredSocketData } from "./sockets";
export interface Message {
  from: Socket["id"];
  content: string;
  at: string;
}
export interface FormattedMessage {
  user: StoredSocketData;
  content: string;
  at: Date;
}
