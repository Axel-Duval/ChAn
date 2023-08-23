import React from "react";
import { useNavigate } from "react-router-dom";
import { ROOM_CODE_LENGTH } from "../../../common/constants";
import { Random } from "../../../common/helpers/random";
import {
  isValidColorHex,
  isValidRoomCode,
  isValidUsername,
} from "../../../common/helpers/validation";
import { Field, Input } from "../../../common/styles";
import { ChatContext } from "../../../context";
import { StyledForm } from "./styles";

export const Form = () => {
  const navigate = useNavigate();
  const { state, dispatch } = React.useContext(ChatContext);

  const [username, setUsername] = React.useState(state.username);
  const [color, setColor] = React.useState(state.color);
  const [room, setRoom] = React.useState(Random.room());

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/chat?room=${room}`);
  };

  const canChat =
    isValidUsername(username) &&
    isValidColorHex(color) &&
    isValidRoomCode(room);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field>
        <Input
          id="color"
          name="color"
          type="color"
          tabIndex={1}
          value={color}
          onChange={(e) => setColor(e.target.value)}
          onBlur={() => dispatch({ type: "color", color })}
        />
      </Field>

      <Field>
        <Input
          id="username"
          name="username"
          type="text"
          tabIndex={2}
          placeholder="username"
          spellCheck={false}
          autoComplete={"off"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={() => dispatch({ type: "username", username })}
          style={{ color }}
        />
        <Input
          type="button"
          value="Random username"
          tabIndex={5}
          onClick={() => setUsername(Random.username())}
        />
      </Field>

      <Field>
        <Input
          id="room"
          name="room"
          type="text"
          tabIndex={3}
          placeholder="room"
          spellCheck={false}
          autoComplete={"off"}
          maxLength={ROOM_CODE_LENGTH}
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          style={{ color }}
        />
        <Input
          type="button"
          value="Random room"
          tabIndex={6}
          onClick={() => setRoom(Random.room())}
        />
      </Field>

      <Input
        type="submit"
        value="Let's chat"
        disabled={!canChat}
        tabIndex={4}
      />
    </StyledForm>
  );
};
