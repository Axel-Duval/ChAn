import { SocketData, _IO, _Socket } from '../sockets';

const defaultData: SocketData = { username: 'Th3NeT', color: '#0078ff' };

export const joinRoom = (io: _IO, socket: _Socket, room: string) => {
  // Notify roomates
  io.to(room).emit('join', socket.id, { ...defaultData, ...socket.data });

  // Join room
  socket.join(room);

  // Notify socket about roomates
  io.in(room)
    .fetchSockets()
    .then(roomates => {
      roomates.forEach(roomate => {
        socket.emit('join', roomate.id, roomate.data);
      });
    });
};
