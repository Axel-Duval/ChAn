import { SocketData, _IO, _Socket } from '../sockets';

export const changeColor = (io: _IO, socket: _Socket, color: SocketData['color']) => {
  const rooms = Array.from(socket.rooms);

  // Change the socket color
  socket.data.color = color;

  // Notify rooms
  return io.to(rooms).emit('color', socket.id, color);
};
