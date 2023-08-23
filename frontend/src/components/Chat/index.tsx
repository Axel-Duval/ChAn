import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate } from "react-router-dom";
import { ErrorFallback } from "../../common/components/error";
import {
  isValidColorHex,
  isValidRoomCode,
  isValidUsername,
} from "../../common/helpers/validation";
import { ChatContext } from "../../context";
import { useQueryParam } from "../../hooks/useQueryParam";
import { ChatBody } from "./Body";

export const Chat = () => {
  const {
    state: { username, color },
  } = React.useContext(ChatContext);

  const [room, setRoom] = useQueryParam("room");

  const canChat =
    isValidUsername(username) &&
    isValidColorHex(color) &&
    isValidRoomCode(room);

  if (!canChat) {
    return <Navigate to="/" />;
  }
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setRoom(room!)}
      resetKeys={[username, color, room]}
    >
      <ChatBody room={room!} key={room!} />
    </ErrorBoundary>
  );
};
