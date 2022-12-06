export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO"

export const addTodo = (id, todo) => {
  let task = {
    id: id,
    task: todo,
    complited: false,
  };

  return {
    type: ADD_TODO,
    payload: task,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {id},
  };
};
