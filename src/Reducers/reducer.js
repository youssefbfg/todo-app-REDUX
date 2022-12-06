import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../Actions/action";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            task: action.payload.task,
          },
        ],
      };

    case REMOVE_TODO:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
      case TOGGLE_TODO: {
        const { id } = action.payload;
        const todos = state.todos.map((obj) =>
          obj.id === id ? { ...obj, completed: !obj.completed } : obj
        );
        return { todos };
      }

    default:
      return state;
  }
};

export default reducer;
