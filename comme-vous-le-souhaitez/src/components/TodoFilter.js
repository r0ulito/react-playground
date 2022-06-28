import React from "react";

import { changeFilter } from "../slices/todoSlice";

import { useDispatch } from "react-redux";

export default function TodoFilter() {
  const dispatch = useDispatch();
  return (
    <div className="button-container">
      <button
        className="filter-button"
        onClick={() => dispatch(changeFilter())}
      >
        All
      </button>
      <button
        className="filter-button"
        onClick={() => dispatch(changeFilter(true))}
      >
        Completed
      </button>
      <button
        className="filter-button"
        onClick={() => dispatch(changeFilter(false))}
      >
        Not completed
      </button>
    </div>
  );
}
