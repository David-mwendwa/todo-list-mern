import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TodoList.scss';
import Todo from './Todo';
import FormRow from './UI/FormRow';
import Button from './UI/Button';
import FormRowSelect from './UI/FormRowSelect';
// import Dialog from './UI/Dialog';
import {
  addTodo,
  editTodo,
  removeTodo,
  fetchTodos,
} from '../redux/todo/todoActions';

const tagOptions = [
  'select',
  'health',
  'education',
  'recreation',
  'adventure',
  'home',
  'work',
  'sport',
  'hobby',
  'other',
];

const TodoList = () => {
  const { todos, isEdited } = useSelector((state) => state.todo);
  const [task, setTask] = useState('');
  const [tag, setTag] = useState('');
  const [editId, setEditId] = useState('');
  const dispatch = useDispatch();
  const todo = { task, tag };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdited) {
      return handleEditSubmit(editId, todo);
    }
    dispatch(addTodo(todo));
    setTask('');
    setTag('');
  };

  // TODO: handle submit after updating todo
  const handleEditSubmit = (id, todo) => {
    dispatch(editTodo(id, todo));
  };

  const setIsEditFormValues = (id) => {
    const todoToEdit = todos.find((todo) => todo._id === id);
    const { task: _task, tag: _tag } = todoToEdit;
    setTask(_task);
    setTag(_tag);
    setEditId(id);
  };

  const handleDelete = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task')) {
      dispatch(removeTodo(taskId));
    }
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
                value={task}
                name='task'
                labelText='Task'
                placeholder='Go to the gym...'
                handleChange={(e) => setTask(e.target.value)}
              />
              {/* <FormRow
                type='text'
                value={todo.tag}
                name='tag'
                labelText='Tag'
                placeholder='Health, Education...'
                handleChange={handleChange}
              /> */}
              <FormRowSelect
                list={tagOptions}
                value={tag}
                name='tag'
                labelText='Tag'
                handleChange={(e) => setTag(e.target.value)}
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
                    handleDelete={() => handleDelete(todo._id)}
                    setIsEditFormValues={() => setIsEditFormValues(todo._id)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
