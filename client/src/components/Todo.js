import React from 'react'
import './Todo.scss'

const Todo = () => {
  return (
    <span className='list-item'>
      <span className='list-item-value'>Finish Javascript course</span>
      <span className='list-item-type'>Learning</span>
      <span className='list-item-remove'>Remove</span>
    </span>
  );
}

export default Todo