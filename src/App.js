import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TodoList from "./Pages/TodoList";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TodoList" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}
