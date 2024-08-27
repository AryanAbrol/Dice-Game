import React from "react";
import '../style/NumberSelector.css'; 

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="number-selector-container">
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <div
            className={`box ${value === selectedNumber ? "selected" : ""}`}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
