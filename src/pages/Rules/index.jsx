import React from "react";
import "./style.css";

function Rules() {
  return (
    <div className="rules-container">
      <h1 className="rules-title">Minesweeper Rules</h1>
      <p className="rules-description">
        Minesweeper is a classic logic-based puzzle game. The objective is to reveal all the safe squares without triggering any mines.
      </p>
      <ol className="rules-list">
        <li>
          <strong>Objective:</strong> Find all safe squares while avoiding the hidden mines.
        </li>
        <li>
          <strong>Reveal a Square:</strong> Left-click to reveal a square. If it contains a mine, you lose the game.
        </li>
        <li>
          <strong>Mark a Mine:</strong> Right-click (or hold Shift and click) to place a flag on a square you suspect contains a mine.
        </li>
        <li>
          <strong>Number Hints:</strong> Revealed squares with numbers indicate how many mines are adjacent to that square.
        </li>
        <li>
          <strong>Win Condition:</strong> Reveal all safe squares or flag all the mines to win the game.
        </li>
      </ol>
      <p className="rules-note">
        Use logic and deduction to avoid triggering a mine. Good luck!
      </p>
      <button
        className="back-home-button"
        onClick={() => (window.location.href = "/")}
      >
        Back to Home
      </button>
    </div>
  );
}

export default Rules;
