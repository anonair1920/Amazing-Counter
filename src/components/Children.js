import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Children(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let singleColor = state.boxes[props.id];
  let changeColor = state.backgroundColor;
  return (
    <div
      className="littleBox"
      style={{ backgroundColor: singleColor ? singleColor : changeColor }}
    >
      <h3>This is box {props.id}</h3>
      <input
        placeholder="insert color"
        type="text"
        onChange={(e) =>
          dispatch({
            type: "singleColor",
            payload: { id: props.id, value: e.target.value },
          })
        }
      />
    </div>
  );
}
