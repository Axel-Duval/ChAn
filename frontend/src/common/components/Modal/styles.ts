import { styled } from "../../../theme";
import { Button } from "../../styles";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${(props) => props.theme.space.sm};
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.muted};
  border: solid 1px ${(props) => props.color || props.theme.color.ultra};
  border-radius: 2px;
  z-index: 10;
`;
ModalWrapper.displayName = "Modal";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  z-index: 10;
`;
ModalOverlay.displayName = "Overlay";

export const ModalBody = styled.div`
  min-width: 200px;
  padding: ${(props) => props.theme.space.lg};
`;
ModalBody.displayName = "ModalBody";

export const Close = styled(Button)`
  margin-left: auto;
  margin-right: 0;
  border: solid 1px ${(props) => props.color || props.theme.color.ultra};
  color: ${(props) => props.color || props.theme.color.muted};
`;
Close.displayName = "ModalCloseButton";
