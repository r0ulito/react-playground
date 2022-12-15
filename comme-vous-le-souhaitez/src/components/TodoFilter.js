import React from "react";
import { useDispatch } from "react-redux";
import {handleFilterChange} from "../slices/todoSlice";

export default function TodoFilter() {

  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(handleFilterChange())}>All</button>
      <button onClick={() => dispatch(handleFilterChange(true))}>Completed</button>
      <button onClick={() => dispatch(handleFilterChange(false))}>Not completed</button>
    </div>
  );
}
