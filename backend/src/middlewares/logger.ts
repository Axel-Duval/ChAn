import { ExtendedError } from 'socket.io/dist/namespace';
import { _Socket } from '../sockets';

export const logger = (socket: _Socket, next: (err?: ExtendedError) => void) => {
  console.log(
    '\x1b[35m%s \x1b[33m[info]\x1b[0m {sid: %s, username: %s}',
    new Date().toISOString(),
    socket.id,
    socket.data.username
  );
  next();
};
