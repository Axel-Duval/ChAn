import React from "react";
import { Modal } from "../../../../common/components/Modal";
import { Random } from "../../../../common/helpers/random";
import { Button, Field, Input, Label } from "../../../../common/styles";
import { ChatContext } from "../../../../context";

interface IProps {
  sendColor: (color: string) => void;
}

export const ChatSettings = ({ sendColor }: IProps) => {
  const { state, dispatch } = React.useContext(ChatContext);

  const [color, setColor] = React.useState(state.color);
  const [key, setKey] = React.useState(state.key);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleBlurColor = () => {
    dispatch({ type: "color", color });
    sendColor(color);
  };

  const handleReset = () => {
    setKey("");
    dispatch({ type: "key", key: "" });
  };

  return (
    <>
      <Button
        onClick={() => setIsModalOpen(true)}
        style={{ color, borderColor: color }}
      >
        Settings
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        color={color}
      >
        <Field>
          <Label>Select a color</Label>
          <br />
          <Input
            id="color"
            name="color"
            type="color"
            tabIndex={1}
            value={color}
            spellCheck={false}
            onChange={(e) => setColor(e.target.value)}
            onBlur={handleBlurColor}
          />
        </Field>
        <Field>
          <Label>Encryption key</Label>
          <br />
          <Input
            id="key"
            name="key"
            type="text"
            tabIndex={2}
            value={key}
            maxLength={10}
            autoComplete={"off"}
            onChange={(e) => setKey(e.target.value)}
            onBlur={() => dispatch({ type: "key", key })}
            style={{ color }}
          />
          <Input
            type="button"
            value="Random key"
            tabIndex={3}
            onClick={() => setKey(Random.key())}
          />
          <Input
            disabled={key.length === 0}
            type="button"
            value="Reset"
            tabIndex={3}
            onClick={handleReset}
          />
        </Field>
      </Modal>
    </>
  );
};
