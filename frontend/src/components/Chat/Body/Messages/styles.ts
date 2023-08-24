import { styled } from "../../../../theme";

export const Wrapper = styled.section`
  overflow-y: auto;
  overflow-x: hidden;
`;
Wrapper.displayName = "Wrapper";

export const List = styled.ol`
  margin: 20px;
`;
List.displayName = "List";

export const MessageItem = styled.li`
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`;
MessageItem.displayName = "MessageItem";

export const MessageContent = styled.div`
  color: ${(props) => props.color};
  border: solid 1px ${(props) => props.color};
  padding: 10px 20px;
  border-radius: 15px;
  width: fit-content;
  max-width: calc(100% - 70px);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.color}20;
  }
`;
MessageContent.displayName = "MessageContent";

export const MessageMeta = styled.span`
  color: ${(props) => props.theme.color.muted};
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
`;
MessageMeta.displayName = "MessageMeta";
