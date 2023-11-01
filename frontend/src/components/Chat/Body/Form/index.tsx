import CryptoJS from "crypto-js";
import React from "react";
import { Input } from "../../../../common/styles";
import { ChatContext } from "../../../../context";

interface IProps {
  sendMessage: (message: string) => void;
}

export const ChatForm = ({ sendMessage }: IProps) => {
  const {
    state: { key },
  } = React.useContext(ChatContext);

  const [text, setText] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(CryptoJS.AES.encrypt(text, key).toString());
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        width: "100%",
      }}
    >
      <Input
        id="message"
        name="message"
        type="text"
        tabIndex={1}
        placeholder="Aa"
        autoComplete="off"
        autoFocus
        spellCheck={false}
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ flex: 1 }}
      />
      <Input
        type="submit"
        value="Send"
        disabled={text.length === 0}
        tabIndex={2}
      />
    </form>
  );
};
