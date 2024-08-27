import React from "react";
import './Rules.css'; // Import the CSS file

const Rules = () => {
  return (
    <div className="rules-container">
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on the dice, if the selected number matches the dice
          number, you will get the same points as the dice.
        </p>
        <p>If your guess is wrong, 2 points will be deducted.</p>
      </div>
    </div>
  );
};

export default Rules;
