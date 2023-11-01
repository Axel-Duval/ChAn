const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const PORT = process.env.PORT || 3000;
const COMMANDS = {
  JOIN: "join",
  LEAVE: "leave",
  MESSAGE: "message",
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
  COLOR_UPDATE: "color_update",
};

const _leave = (io, client, room) =>
  io.sockets.in(room).emit(COMMANDS.LEAVE, { id: client.id });

const _disconnect = (client) => client.disconnect();

io.on("connection", (client) => {
  /* INITIALIZATION */
  client.on("init", (data) => {
    if (client.room) {
      client.leave(client.room);
    }

    client.room = data.rooms;
    client.username = data.username;
    client.color = data.color;

    io.sockets.in(client.room).emit(COMMANDS.JOIN, {
      id: client.id,
      username: client.username,
      color: client.color,
      room: client.room,
    });

    for (var prop in io.sockets.in(client.room).sockets) {
      if (
        io.sockets.in(client.room).sockets[prop].username &&
        io.sockets.in(client.room).sockets[prop].room == client.room
      ) {
        client.emit(COMMANDS.CONNECTED, {
          id: io.sockets.in(client.room).sockets[prop].id,
          username: io.sockets.in(client.room).sockets[prop].username,
          color: io.sockets.in(client.room).sockets[prop].color,
          room: io.sockets.in(client.room).sockets[prop].room,
        });
      }
    }
    client.join(client.room);
  });

  /* UPDATE COLOR */
  client.on("color_update", (data) => {
    client.color = data.color;
    io.sockets
      .in(data.room)
      .emit("color_update", { id: client.id, color: client.color });
  });

  /* MESSAGE TRANSMISSION */
  client.on("message", (message) => {
    io.sockets.in(message.room).emit("message", message);
  });

  /* CLIENT LEAVES */
  client.on(COMMANDS.LEAVE, (data) => _leave(io, client, data.room));

  /* DISCONNECTION */
  client.on(COMMANDS.DISCONNECTED, () => _disconnect(client));
});

//Start server
server.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
});
