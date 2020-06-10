import React from "react";
import "./App.css";
import Children from "./components/Children";
import { useSelector, useDispatch } from "react-redux";

function App() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  const increaseNum = () => {
    dispatch({ type: "increment" }); //dispatch send action, and action is object
  };

  const changeColor = (color) => {
    dispatch({ type: "changeColor", payload: color });
  };

  const renderBox = () => {
    return state.boxes.map((item) => <Children />);
  };

  return (
    <div className="App-header amazingBox">
      <h1>Amazing Counter</h1>
      <h2>{state.count}</h2>
      <div className="buttons">
        <button
          onClick={() => {
            increaseNum();
          }}
        >
          {" "}
          +{" "}
        </button>{" "}
        <button
          onClick={() => {
            dispatch({
              type: "decrement",
              payload: { num: 2, message: "an is awesome" },
            });
          }}
        >
          {" "}
          -{" "}
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type a color"
          onChange={(e) => dispatch({type: "changeColor", payload: e.target.value})}
        />
        {renderBox()}
      </div>
    </div>
  );
}

export default App;
