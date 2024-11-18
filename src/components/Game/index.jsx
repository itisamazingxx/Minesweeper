import React from "react";
import Board from "../Board/index";
import { useParams, useNavigate } from "react-router-dom";

import "./style.css";

const difficulties = {
  easy: { height: 8, width: 8, mines: 10 },
  medium: { height: 16, width: 16, mines: 40 },
  hard: { height: 30, width: 16, mines: 99 },
};

class Game extends React.Component {
  constructor(props) {
    super(props);

    const { difficulty } = props.params || {};
    const initialSettings = this.getSettingsByDifficulty(difficulty);

    this.boardElement = React.createRef();

    this.state = {
      ...initialSettings,
      gameStatus: 0,
    };
  }

  getSettingsByDifficulty = (difficulty) => {
    return difficulties[difficulty] || difficulties.easy;
  };

  restartGame = () => {
    this.boardElement.current.restartBoard();
  };

  render() {
    const { height, width, mines } = this.state;

    return (
      <div className="game-container">
        <div className="board-container">
          <Board
            ref={this.boardElement}
            height={height}
            width={width}
            mines={mines}
          />
        </div>

        <div className="control-panel">
          <h3>Current Difficulty</h3>
          <p>
            <strong>Height:</strong> {height}
          </p>
          <p>
            <strong>Width:</strong> {width}
          </p>
          <p>
            <strong>Mines:</strong> {mines}
          </p>
          <button className="restart-button" onClick={this.restartGame}>
            Restart
          </button>
          <h3>Change Difficulty</h3>
          <DifficultyButtons />
          <button
            className="back-home-button"
            onClick={() => (window.location.href = "/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }
}

const withParams = (Component) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  return <Component {...props} params={params} navigate={navigate} />;
};

const DifficultyButtons = () => {
  return (
    <div className="difficulty-buttons">
      <button
        className="difficulty-button easy"
        onClick={() => (window.location.href = "/game/easy")}
      >
        Easy
      </button>
      <button
        className="difficulty-button medium"
        onClick={() => (window.location.href = "/game/medium")}
      >
        Medium
      </button>
      <button
        className="difficulty-button hard"
        onClick={() => (window.location.href = "/game/hard")}
      >
        Hard
      </button>
    </div>
  );
};

export default withParams(Game);


