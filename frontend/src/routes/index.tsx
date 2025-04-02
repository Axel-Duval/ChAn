import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Chat } from "../components/Chat";
import { Home } from "../components/Home";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};
