import { ExtendedError } from 'socket.io/dist/namespace';
import { _Socket } from '../sockets';

export const checkUsername = (socket: _Socket, next: (err?: ExtendedError) => void) => {
  if (socket.data.username) {
    next();
  }
  const username: string = socket.handshake.auth.username;
  if (!username || username.length < 2) {
    console.log(
      '\x1b[35m%s \x1b[31m[error](username) \x1b[0m%s',
      new Date().toISOString(),
      username
    );
    return next(new Error('Invalid username. Username must be at least 2 characters'));
  }
  socket.data.username = username;
  next();
};
