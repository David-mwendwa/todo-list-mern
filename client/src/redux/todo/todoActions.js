import axios from 'axios';
import { ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from './todoTypes';

const axiosInstance = axios.create({
  baseURL: '/api/v1',
});

export const addTodoStart = () => {
  return {
    type: ADD_TODO_START,
  };
};

export const addTodoSuccess = (todo) => {
  return {
    type: ADD_TODO_SUCCESS,
    payload: todo,
  };
};

export const addTodoError = (error) => {
  return {
    type: ADD_TODO_ERROR,
    payload: error,
  };
};

export const addTodo = (todo) => {
  return async (dispatch) => {
    dispatch(addTodoStart());
    try {
      const { data } = await axiosInstance.post('/todos', todo);
      dispatch(addTodoSuccess(data.todo));
    } catch (error) {
      dispatch(addTodoError(error.message));
    }
  };
};
