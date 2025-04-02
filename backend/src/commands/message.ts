import { _IO, _Socket } from '../sockets';

export const sendMessage = (io: _IO, socket: _Socket, message: string) => {
  const rooms = Array.from(socket.rooms);

  // Notify rooms
  return io.to(rooms).emit('message', socket.id, message, new Date().toISOString());
};
