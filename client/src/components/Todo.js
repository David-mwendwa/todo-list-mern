import React from 'react';
import './Todo.scss';

const Todo = ({ task, tag }) => {
  return (
    <span className='list-item'>
      <span className='list-item-value'>{task}</span>
      <span className='list-item-type'>{tag}</span>
      <span className='list-item-remove'>Remove</span>
    </span>
  );
};

export default Todo;
