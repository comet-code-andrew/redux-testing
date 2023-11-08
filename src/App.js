import "./styles.css";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { setCurrentTodo } from "./store/todo/todo.actions";
import { useDispatch, useCallback } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useTestClick = () => {
  const dispatch = useDispatch();
  let num = Math.random() * 10;
  return () => dispatch(setCurrentTodo("fdsafdsa"));
};

export default function App() {
  const testClick = useTestClick();

  const todos = useSelector((state) => {
    state.currentTodo;
  });
  console.log(todos);

  return (
    <>
      <div className="App">
        <p>{todos}</p>
        <h1>Hello CodeSandbox</h1>
        <h2>I am a Minimal Working Example of Redux</h2>
      </div>
      <button onClick={testClick}>Add to todo list</button>
    </>
  );
}
