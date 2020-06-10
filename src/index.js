import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";
const initialState = {
  count: 0,
  backgroundColor: "white",
  boxes: [],
};

function reducer(state = initialState, action) {
  if (action.type === "increment") {
    state.count++;
    state.boxes.unshift("");
  } else if (action.type === "decrement") {
    state.count--;
    state.boxes.pop("");
  } else if (action.type === "reset") {
    state.count = 0;
  } else if (action.type === "changeColor") {
    state.backgroundColor = action.payload;
  }
  return { ...state }; // take everything inside the initialState and make it somethign
}
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
