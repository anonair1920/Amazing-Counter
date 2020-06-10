import React from "react";
import { useSelector } from "react-redux";
export default function Children() {
  let state = useSelector((state) => state);
  return (
    <div className='littleBox' style={{backgroundColor: state.backgroundColor}}>
      <h3>This is box</h3>
      <input placeholder='insert color'/>
    </div>
  );
}
