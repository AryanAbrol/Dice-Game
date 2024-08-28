import React from 'react';
import '../style/Button.css'; 

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
