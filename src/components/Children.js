import React from "react";
import { useSelector } from "react-redux";
export default function Children() {
  let count = useSelector((state) => state.count);
  return (
    <div>
      <h3>This is Children</h3>
      <h5>{count}</h5>
    </div>
  );
}
