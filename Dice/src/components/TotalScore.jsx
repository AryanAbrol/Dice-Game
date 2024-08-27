import React from "react";
import '../style/TotalScore.css'; // Import the CSS file

const TotalScore = ({ score }) => {
  return (
    <div className="score-container">
      <h1>{score}</h1>
      <p>Total Score</p>
    </div>
  );
};

export default TotalScore;
