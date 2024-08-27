import React from "react";
import { Button } from "./Button";
import '../style/StartGame.css'; // Import the CSS file

const StartGame = ({ toggle }) => {
  return (
    <div className="container">
      <div>
        <img src="/images/dices.png" alt="Dices" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </div>
  );
};

export default StartGame;
