import TODO_ACTION_TYPES from "./todo.types";

const INITIAL_STATE = {
  currentTodo: []
};

// reducers in redux recieve ever single action that gets dispatched ever
// as a result default states must be returned
// all reducers are, are pure functions functions that recieve a state and an action and in turn return an object that represents that state
export const todoReducer = (state = INITIAL_STATE, action = {}) => {
  console.log("Todo reducer");
  const { type, payload } = action;

  switch (type) {
    case TODO_ACTION_TYPES.SET_CURRENT_TODO:
      console.log("add todo");
      console.log(state);
      return { currentTodo: state.currentTodo.concat([payload]) };
    default:
      console.log("nothing happenin");
      return state;
  }
};
