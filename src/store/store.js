// Combined place where all redux happens, where state lives, recieve actions, dispatch actions into reducers to update state
// Need
// The 3 core libraries from redux
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

// reducers are what actually allow you to form a state object
// root reducer
// First argument , stores facilitate the movement and passing of actions through the reducers
// Second argument is for any default states, optional
// third argument
export const store = createStore(rootReducer, undefined, composedEnhancers);
