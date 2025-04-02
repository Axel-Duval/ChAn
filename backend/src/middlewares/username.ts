import { ExtendedError } from 'socket.io/dist/namespace';
import { _Socket } from '../sockets';
import { log } from '../utils/logger';

export const checkUsername = (socket: _Socket, next: (err?: ExtendedError) => void) => {
  if (socket.data.username) {
    next();
  }
  const username: string = socket.handshake.auth.username;
  if (!username || username.length < 2) {
    log('error', `{username: ${username}}`);
    return next(new Error('Invalid username. Username must be at least 2 characters'));
  }
  socket.data.username = username;
  next();
};
