import { ExtendedError } from 'socket.io/dist/namespace';
import { _Socket } from '../sockets';

const hexadecimalColorCode = /^#([0-9A-Fa-f]{8}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/;

export const checkColor = (socket: _Socket, next: (err?: ExtendedError) => void) => {
  if (socket.data.color) {
    next();
  }
  const color: string = socket.handshake.auth.color;
  if (!color || !color.match(hexadecimalColorCode)) {
    console.log('\x1b[35m%s \x1b[31m[error](color) \x1b[0m%s', new Date().toISOString(), color);
    return next(new Error('Invalid color. Color must be hexadecimal.'));
  }
  socket.data.color = color;
  next();
};
