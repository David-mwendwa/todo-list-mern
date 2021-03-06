import React from 'react';
import { FaTrash, FaPen } from 'react-icons/fa';
import './Todo.scss';

const Todo = ({ task, tag, setIsEditFormValues, handleDelete, taskId }) => {
  return (
    <span className='list-item'>
      <span className='list-item-value'>{task}</span>
      <span className='list-item-type'>{tag}</span>
      <span className='list-item-actions'>
        <span
          className='list-item-edit'
          onClick={() => setIsEditFormValues(taskId)}>
          <FaPen />
        </span>
        <span className='list-item-remove' onClick={() => handleDelete(taskId)}>
          <FaTrash />
        </span>
      </span>
    </span>
  );
};

export default Todo;
