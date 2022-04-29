import {
  ADD_TODO_START,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
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
      let todo = action.payload;
      const isTodoExist = state.todos.find((t) => t.name === todo.name);
      if (isTodoExist) {
        return {
          ...state,
          todos: state.todos.map((t) =>
            todo.name === isTodoExist.name ? todo : t
          ),
        };
      } else {
        return {
          ...state,
          loading: false,
          todos: [...state.todos, todo],
        };
      }
    case ADD_TODO_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case REMOVE_TODO_ITEM:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case FETCH_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODOS_ERROR:
      return {
        loading: false,
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
