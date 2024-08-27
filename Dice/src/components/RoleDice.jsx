import React from "react";
import '../style/RoleDice.css';

const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <div className="dice-container">
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </div>
  );
};

export default RoleDice;
