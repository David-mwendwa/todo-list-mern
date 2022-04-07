import { ADD_TODO_START, ADD_TODO_SUCCESS, ADD_TODO_ERROR } from './todoTypes';

const initialState = {
  isLoading: false,
  todo: [],
  error: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_START:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todo: action.payload,
        error: '',
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        todo: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
