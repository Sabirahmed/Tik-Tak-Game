import React from "react";
import "./Players.css";

function Players({ player1Score, player2Score }) {
  return (
    <React.Fragment>
      <div className="player player1">
        <p>Players 1</p>
        <p>Score:{player1Score}</p>
      </div>

      <div className="player player2">
        <p>Players 2</p>
        <p>Score:{player2Score}</p>
      </div>
    </React.Fragment>
  );
}

export default Players;
