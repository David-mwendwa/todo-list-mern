import axios from 'axios';
import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
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
  dispatch({ type: ADD_TODO_START });
  try {
    const { data } = await axiosInstance.post('/todos', todo);
    dispatch({ type: ADD_TODO_SUCCESS, payload: data.todo });
  } catch (error) {
    dispatch({ type: ADD_TODO_ERROR, payload: error.message });
  }
};

// REMOVE TODO
export const removeTodo = (id) => async (dispatch) => {
  await axiosInstance.delete(`/todos/${id}`);
  dispatch({ type: REMOVE_TODO_ITEM, payload: id });
};

// FETCH TODOS
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_TODOS_START });
    try {
      const { data } = await axiosInstance('/todos');
      dispatch({ type: FETCH_TODOS_SUCCESS, payload: data.todos });
    } catch (error) {
      dispatch({ type: FETCH_TODOS_ERROR, payload: error.message });
    }
  };
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
