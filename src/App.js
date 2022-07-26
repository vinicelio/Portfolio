import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TodoList from "./Pages/TodoList";
import { Toaster } from "react-hot-toast";
import PasswordGenerator from "./Pages/PasswordGenerator";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/PasswordGenerator" element={<PasswordGenerator />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
