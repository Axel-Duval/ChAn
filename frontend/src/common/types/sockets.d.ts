import { Socket } from "socket.io-client";

export interface SocketData {
  username: string;
  color: string;
}

export interface StoredSocketData extends SocketData {
  id: string;
}

export interface ServerToClientEvents {
  join: (id: Socket["id"], data: SocketData) => void;
  leave: (id: Socket["id"]) => void;
  color: (id: Socket["id"], color: SocketData["color"]) => void;
  message: (id: Socket["id"], message: string, at: string) => void;
}

export interface ClientToServerEvents {
  message: (data: string) => void;
  color: (color: SocketData["color"]) => void;
  join: (room: string) => void;
}

export type _Socket = Socket<ServerToClientEvents, ClientToServerEvents>;
