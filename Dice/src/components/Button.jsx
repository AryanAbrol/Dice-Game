import React from 'react';
import '../style/Button.css'; 

export const Button = ({ children, ...props }) => {
  return (
    <button className={`button `} {...props}>
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
