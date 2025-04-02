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

export const MessageContent = styled.div<{ copied: boolean }>`
  position: relative;
  padding: ${(props) => props.theme.space.xs} ${(props) => props.theme.space.sm};
  border: solid 1px ${(props) => props.color};
  color: ${(props) => props.color};
  border-radius: 2px;
  width: fit-content;
  max-width: calc(100% - 70px);
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.color}${(props) => (props.copied ? 0 : 20)};
  }

  &:after {
    display: ${(props) => (props.copied ? "block" : "none")};
    content: "copied";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    padding: 0 10px;
    border-radius: 2px;
    background-color: ${(props) => props.theme.color.black};
    color: ${(props) => props.theme.color.muted};
    font-family: ${(props) => props.theme.font.family.secondary}, sans-serif;
    font-weight: ${(props) => props.theme.font.weight.light};
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;
MessageContent.displayName = "MessageContent";

export const MessageMeta = styled.span`
  color: ${(props) => props.theme.color.muted};
  font-family: ${(props) => props.theme.font.family.secondary}, sans-serif;
  font-weight: ${(props) => props.theme.font.weight.light};
  font-size: ${(props) => props.theme.font.size.sm};
`;
MessageMeta.displayName = "MessageMeta";
