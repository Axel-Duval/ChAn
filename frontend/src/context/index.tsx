import * as React from "react";
import { persist, retrieveOrFallback } from "../common/helpers/persistance";
import { Random } from "../common/helpers/random";

type Action =
  | { type: "username"; username: string }
  | { type: "color"; color: string }
  | { type: "key"; key: string };
type Dispatch = (action: Action) => void;
type State = { username: string; color: string; key: string };

const defaultState: State = {
  username: retrieveOrFallback("username", Random.username()),
  color: retrieveOrFallback("color", Random.color()),
  key: "",
};

export const ChatContext = React.createContext<{
  state: State;
  dispatch: Dispatch;
}>({ state: defaultState, dispatch: () => {} });

const ChatReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "username": {
      persist("username", action.username);
      return { ...state, username: action.username };
    }
    case "color": {
      persist("color", action.color);
      return { ...state, color: action.color };
    }
    case "key": {
      return { ...state, key: action.key };
    }
    default: {
      return state;
    }
  }
};

const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(ChatReducer, defaultState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export { ChatProvider };
