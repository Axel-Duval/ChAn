import React from "react";
import ReactDOM from "react-dom";
import { Close, ModalBody, ModalOverlay, ModalWrapper } from "./styles";

interface IProps {
  isOpen: boolean;
  color: string;
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Modal: React.FC<IProps> = ({
  isOpen,
  onClose,
  children,
  color,
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <ModalWrapper style={{ borderColor: color }}>
        <Close onClick={onClose} style={{ color, borderColor: color }}>
          Close
        </Close>
        <ModalBody>{children}</ModalBody>
      </ModalWrapper>
    </>,
    document.getElementById("portal")!
  );
};
