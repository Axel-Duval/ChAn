import React from "react";
import { Field, Input } from "../../../../common/styles";
import { StyledForm } from "../../../Home/Form/styles";

interface IProps {
  sendMessage: (message: string) => void;
}

export const ChatForm = ({ sendMessage }: IProps) => {
  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(text);
    setText("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Field>
        <Input
          id="message"
          name="message"
          type="text"
          tabIndex={1}
          placeholder="Aa"
          spellCheck={false}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Input
          type="submit"
          value="Send"
          disabled={text.length === 0}
          tabIndex={2}
        />
      </Field>
    </StyledForm>
  );
};
