import TODO_ACTION_TYPES from "./todo.types";

const createAction = (type, payload) => ({ type, payload });

export const setCurrentTodo = (todo) =>
  createAction(TODO_ACTION_TYPES.SET_CURRENT_TODO, todo);
