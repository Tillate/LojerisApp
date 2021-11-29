import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
      <Routes>
        <Route exact path="/" exact element={<Home/>} />
        <Route path="*" exact element={<NotFound/>} />
      </Routes>
  );
};


