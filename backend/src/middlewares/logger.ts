import { ExtendedError } from 'socket.io/dist/namespace';
import { _Socket } from '../sockets';
import { log } from '../utils/logger';

export const logger = (socket: _Socket, next: (err?: ExtendedError) => void) => {
  log('info', `{sid: ${socket.id}, username: ${socket.data.username}}`);
  next();
};
