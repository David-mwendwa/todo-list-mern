import React from 'react';
import './Button.scss';

const Button = ({ children }) => {
  return <button className='task-add'>{children}</button>;
};

export default Button;
