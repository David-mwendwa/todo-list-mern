import React from 'react';
import './Button.scss';

const Button = ({ children, handleSubmit }) => {
  return (
    <button onClick={handleSubmit} className='task-add'>
      {children}
    </button>
  );
};

export default Button;
