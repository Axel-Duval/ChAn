import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { ChatProvider } from "./context/index";
import { Router } from "./routes/index";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChatProvider>
        <Router />
      </ChatProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
