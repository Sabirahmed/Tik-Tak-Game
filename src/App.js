import React, { useState, useEffect, useCallback } from "react";
import Square from "./components/Square";
import "./App.css";
import Players from "./components/Players/Players";

const clearState = ["", "", "", "", "", "", "", "", "", ""];

function App() {
  const [gameState, updateGameState] = useState(clearState);
  const [isXChance, updateIsXChance] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  let player = "";
  const onUserClicked = (index) => {
    let strings = Array.from(gameState);
    if (strings[index]) return;
    strings[index] = isXChance ? "X" : "0";
    updateIsXChance(!isXChance);
    updateGameState(strings);
  };

  const clearGame = () => {
    updateGameState(clearState);
  };

  const checkWinner = useCallback(() => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // console.log(
    //   "Class: App, Function: checkWinner ==",
    //   gameState[0],
    //   gameState[1],
    //   gameState[2]
    // );
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  }, [gameState]);

  useEffect(() => {
    let winner = checkWinner();
    if (winner) {
      clearGame();
      if (winner === "X") {
        setPlayer1Score(player1Score + 1);
        player = "Player1";
      } else {
        setPlayer2Score(player2Score + 1);
        player = "Player2";
      }
      alert(`Amazing ! ${player} won the Game !`);
    }
  }, [gameState, checkWinner, player1Score, player2Score]);

  const resetScore = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  return (
    <React.Fragment>
      <div className="app-header">
        <header className="header">
          <h1>Tic Tak Toe</h1>
        </header>
        <Players player1Score={player1Score} player2Score={player2Score} />
        <div className="game-board">
          <div className="row jc-center">
            <Square
              className="b-bottom-right"
              onClick={() => onUserClicked(0)}
              state={gameState[0]}
            />
            <Square
              className="b-bottom-right"
              onClick={() => onUserClicked(1)}
              state={gameState[1]}
            />
            <Square
              className="b-bottom"
              onClick={() => onUserClicked(2)}
              state={gameState[2]}
            />
          </div>
          <div className="row jc-center">
            <Square
              className="b-bottom-right"
              onClick={() => onUserClicked(3)}
              state={gameState[3]}
            />
            <Square
              className="b-bottom-right"
              onClick={() => onUserClicked(4)}
              state={gameState[4]}
            />
            <Square
              className="b-bottom"
              onClick={() => onUserClicked(5)}
              state={gameState[5]}
            />
          </div>
          <div className="row jc-center">
            <Square
              className="b-right"
              onClick={() => onUserClicked(6)}
              state={gameState[6]}
            />
            <Square
              className="b-right"
              onClick={() => onUserClicked(7)}
              state={gameState[7]}
            />
            <Square
              className="b-right"
              onClick={() => onUserClicked(8)}
              state={gameState[8]}
            />
          </div>
        </div>
        <div className="clear-button">
          <button className="btn" onClick={clearGame}>
            New Game
          </button>
          <button className="btn" onClick={resetScore}>
            Reset Scores
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
