import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { SOCKETS_ENDPOINT } from "../common/constants";
import { Message } from "../common/types/messages";
import { SocketData, StoredSocketData, _Socket } from "../common/types/sockets";

interface IProps {
  username: string;
  color: string;
  room: string;
}

export function useSockets({ username, color, room }: IProps): {
  self: StoredSocketData | undefined;
  all: StoredSocketData[];
  others: StoredSocketData[];
  messages: Message[];
  getById: (id: StoredSocketData["id"]) => StoredSocketData | undefined;
  sendMessage: (message: string) => void;
  sendColor: (color: string) => void;
} {
  const [users, setUsers] = React.useState<StoredSocketData[]>([]);
  const [socket, setSocket] = React.useState<_Socket | null>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);

  const self = React.useMemo(() => {
    if (socket === null) return undefined;
    return users.find((u) => u.id === socket.id);
  }, [socket, users]);

  const others = React.useMemo(() => {
    if (socket === null) return users;
    return users.filter((u) => u.id !== socket.id);
  }, [socket, users]);

  const getById = React.useCallback(
    (id: StoredSocketData["id"]) => users.find((u) => u.id === id),
    [users]
  );

  const sendMessage = React.useCallback(
    (message: string) => {
      if (socket === null) return;
      socket.emit("message", message);
    },
    [socket]
  );

  const sendColor = React.useCallback(
    (color: string) => {
      if (socket === null) return;
      socket.emit("color", color);
    },
    [socket]
  );

  useEffect(() => {
    const socket: _Socket = io(SOCKETS_ENDPOINT, {
      auth: {
        username,
        color,
      },
    });

    setSocket(socket);

    socket.on("connect_error", (e: Error) => {
      setSocket(() => {
        throw new Error(e.message);
      });
    });

    socket.on("connect", () => socket.emit("join", room));

    socket.on("join", (id: string, data: SocketData) =>
      setUsers((users) => [...users, { id, ...data }])
    );

    socket.on("leave", (id: string) =>
      setUsers((users) => users.filter((u) => u.id !== id))
    );

    socket.on("message", (from, content, at) => {
      setMessages((messages) => [...messages, { from, content, at }]);
    });

    socket.on("color", (id, color) => {
      setUsers((users) =>
        users.map((u) => (u.id !== id ? u : { ...u, color }))
      );
    });

    return () => {
      setSocket(null);
      socket.disconnect();
    };
  }, [room]);

  return {
    self,
    all: users,
    others,
    messages,
    getById,
    sendMessage,
    sendColor,
  };
}
