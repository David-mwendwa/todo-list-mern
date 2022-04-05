import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './Todo.scss';

const Todo = ({ task, tag, handleDelete, taskId }) => {
  return (
    <span className='list-item'>
      <span className='list-item-value'>{task}</span>
      <span className='list-item-type'>{tag}</span>
      <span className='list-item-remove' onClick={() => handleDelete(taskId)}>
        <FaTrash />
      </span>
    </span>
  );
};

export default Todo;
