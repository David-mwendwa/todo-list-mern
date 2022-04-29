import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  EDIT_TODO_START,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_ERROR,
  REMOVE_TODO_ITEM,
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  CLEAR_ERRORS,
} from './todoTypes';

const reducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case ADD_TODO_START:
    case FETCH_TODOS_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO_START:
      return {
        ...state,
        isEdited: false,
        loading: true,
      };
    case EDIT_TODO_SUCCESS:
      console.log('edit payload match', action.payload);
      const { todo, id, isEdited } = action.payload;
      return {
        ...state,
        loading: false,
        todos: state.todos.map((t) => (t._id === id ? todo : t)),
        isEdited: isEdited,
      };
    case ADD_TODO_ERROR:
    case EDIT_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter((t) => t._id !== action.payload),
      };
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        isEdited: false,
        todos: action.payload,
      };
    case FETCH_TODOS_ERROR:
      return {
        loading: false,
        isEdited: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
