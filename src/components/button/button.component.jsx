import React from 'react';
import './button.styles.scss';

const Button = ({children, color}) => (
  <button className={`btn ${color ? color : 'btn-primary'}`}>
    {children}
  </button>
);

export default Button;
