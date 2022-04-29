import axios from 'axios';
import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  EDIT_TODO_START,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_ERROR,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  CLEAR_ERRORS,
  REMOVE_TODO_ITEM,
} from './todoTypes';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
});

// ADD TODO
export const addTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TODO_START });
    const { data } = await axiosInstance.post('/todos', todo);
    dispatch({ type: ADD_TODO_SUCCESS, payload: data.todo });
  } catch (error) {
    dispatch({ type: ADD_TODO_ERROR, payload: error.message });
  }
};

// EDIT TODO
export const editTodo = (id, todo) => async (dispatch) => {
  try {
    dispatch({ type: EDIT_TODO_START });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    console.log('edit request', id, todo);
    const { data } = await axiosInstance.patch(`/todos/${id}`, todo, config);
    console.log('edit response', data);
    dispatch({
      type: EDIT_TODO_SUCCESS,
      payload: { todo: data.todo, isEdited: data.success, id },
    });
  } catch (error) {
    dispatch({ type: EDIT_TODO_ERROR, payload: error.message });
  }
};

// REMOVE TODO
export const removeTodo = (id) => async (dispatch) => {
  await axiosInstance.delete(`/todos/${id}`);
  dispatch({ type: REMOVE_TODO_ITEM, payload: id });
};

// FETCH TODOS
export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TODOS_START });
    const { data } = await axiosInstance('/todos');
    dispatch({ type: FETCH_TODOS_SUCCESS, payload: data.todos });
  } catch (error) {
    dispatch({ type: FETCH_TODOS_ERROR, payload: error.message });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
