import React from 'react';
import './Dialog.scss';

const Dialog = () => {
  return (
    <span className='verify'>
      <span className='verify-question'>
        Sure you want to delete this task?
      </span>
      <span className='verify-btns'>
        <span className='verify-btn' data-delete='yes'>
          Yes
        </span>
        <span className='verify-btn' data-delete='No'>
          No
        </span>
      </span>
    </span>
  );
};

export default Dialog;
