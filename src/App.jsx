import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Game from "./components/Game";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:difficulty" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
    </Routes>
    </div>
  );
};

export default App;



