import { _IO, _Socket } from '../sockets';

export const disconnecting = (io: _IO, socket: _Socket) => {
  const rooms = Array.from(socket.rooms);

  // Notify rooms of the disconnection
  io.to(rooms).emit('leave', socket.id);

  // Leave rooms
  return rooms.forEach(room => socket.leave(room));
};
