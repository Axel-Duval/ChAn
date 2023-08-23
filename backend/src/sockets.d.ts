import { Server, Socket } from 'socket.io';

export interface SocketData {
  username: string;
  color: string;
}

export interface ServerToClientEvents {
  join: (id: Socket['id'], data: SocketData) => void;
  leave: (id: Socket['id']) => void;
  color: (id: Socket['id'], color: SocketData['color']) => void;
  message: (id: Socket['id'], message: string, at: string) => void;
}

export interface ClientToServerEvents {
  message: (data: string) => void;
  color: (color: SocketData['color']) => void;
  join: (room: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export type _IO = Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>;
export type _Socket = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;
