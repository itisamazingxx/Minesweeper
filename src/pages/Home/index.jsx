import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Minesweeper Game</h1>
      <p className="home-description">
        Welcome to Minesweeper! Click the tiles to reveal numbers and avoid the mines. Use your logic and skill to uncover all the safe squares.
      </p>
      <div className="home-buttons">
        <Link to="/game/easy" className="home-button start-game">
          Start Game
        </Link>
        <Link to="/rules" className="home-button rules">
          View Rules
        </Link>
      </div>
    </div>
  );
}

export default Home;
