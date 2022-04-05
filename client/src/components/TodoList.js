import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TodoList.scss';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
});

const TodoList = () => {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axiosInstance('/todos');
        setTodos(data.todos);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [setTodos]);

  return (
    <>
      <div class='dashboard'>
        <div class='dashboard-left'>
          <div class='left-header'>
            <h3>Create a task!</h3>
          </div>
          <div class='left-task'>
            <div class='task-info task-item'>
              <label for='' class='task-label'>
                Task
              </label>
              <input
                type='text'
                class='task-info-input task-input'
                placeholder='Go to the gym...'
              />
              <label for='' class='task-label'>
                Tag
              </label>
              <input
                type='text'
                class='task-input task-type-input'
                placeholder='Health, Education..'
              />
            </div>
            <button class='task-add'>Add Task</button>
          </div>
        </div>
        <div class='dashboard-right'>
          <div class='right-list'>
            <h3 class='right-list-h3'>Add a task to begin.</h3>
            <div class='list-flex'>
              <span class='list-item'>
                <span class='list-item-value'>Finish Javascript course</span>
                <span class='list-item-type'>Learning</span>
                <span class='list-item-remove'>Remove</span>
              </span>
            </div>
          </div>
          <span class='verify'>
            <span class='verify-question'>
              Sure you want to delete this task?
            </span>
            <span class='verify-btns'>
              <span class='verify-btn' data-delete='yes'>
                Yes
              </span>
              <span class='verify-btn' data-delete='No'>
                No
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default TodoList;
