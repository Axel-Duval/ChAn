import 'dotenv/config';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { changeColor } from './commands/color';
import { disconnecting } from './commands/disconnecting';
import { joinRoom } from './commands/join';
import { sendMessage } from './commands/message';
import { checkColor } from './middlewares/color';
import { logger } from './middlewares/logger';
import { checkUsername } from './middlewares/username';
import {
  ClientToServerEvents,
  InterServerEvents,
  ServerToClientEvents,
  SocketData
} from './sockets';
import { log } from './utils/logger';

const PORT = process.env.PORT || 3010;

const app = express();
const server = http.createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(
  server,
  { cors: { origin: 'http://localhost:3000' } }
);

io.use(checkUsername);
io.use(checkColor);
io.use(logger);

io.on('connection', socket => {
  socket.on('join', room => joinRoom(io, socket, room));
  socket.on('color', color => changeColor(io, socket, color));
  socket.on('message', message => sendMessage(io, socket, message));
  socket.on('disconnecting', () => disconnecting(io, socket));
});

server.listen(PORT, () => log('bootstrap', `Server is listening at http://localhost:${PORT}`));
