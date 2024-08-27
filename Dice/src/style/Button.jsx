// src/components/Button.jsx
import React from 'react';
import './Button.css'; // Import the CSS file

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};

export const OutlineButton = ({ children, ...props }) => {
  return (
    <button className={`button outline-button`} {...props}>
      {children}
    </button>
  );
};
