import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TodoList.scss';
import Todo from './Todo';
import FormRow from './UI/FormRow';
import Button from './UI/Button';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
});

const TodoList = () => {
  let [todos, setTodos] = useState([]);
  let [todo, setTodo] = useState({
    task: '',
    tag: '',
  });

  useEffect(() => {
    (async () => {
      try {
        let { data } = await axiosInstance('/todos');
        setTodos(data.todos);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [todos, setTodos]);

  const handleChange = (e) => {
    setTodo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axiosInstance.post('/todos', todo);
      let { todo: todoItem } = data;
      setTodos((prevState) => ({ ...prevState, todoItem }));
    } catch (error) {
      console.log(error.message);
    }
    setTodo({ task: '', tag: '' });
  };

  const handleDelete = async (taskId) => {
    await axiosInstance.delete(`/todos/${taskId}`);
  };

  return (
    <>
      <div className='dashboard'>
        <div className='dashboard-left'>
          <div className='left-header'>
            <h3>Create a task!</h3>
          </div>
          <div className='left-task'>
            <div className='task-info task-item'>
              <FormRow
                type='text'
                value={todo.task}
                name='task'
                labelText='Task'
                placeholder='Go to the gym...'
                handleChange={handleChange}
              />
              <FormRow
                type='text'
                value={todo.tag}
                name='tag'
                labelText='Tag'
                placeholder='Health, Education...'
                handleChange={handleChange}
              />
            </div>
            <Button handleSubmit={handleSubmit}>Add Task</Button>
          </div>
        </div>
        <div className='dashboard-right'>
          <div className='right-list'>
            <h3 className='right-list-h3'>Add a task to begin.</h3>
            <div className='list-flex'>
              {todos &&
                todos.length &&
                todos.map((todo) => (
                  <Todo
                    task={todo.task}
                    tag={todo.tag}
                    taskId={todo._id}
                    key={todo._id}
                    handleDelete={handleDelete}
                  />
                ))}
            </div>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default TodoList;
