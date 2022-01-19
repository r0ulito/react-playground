import React from "react";

export function TodoFilter({ changeFilter }) {
  return (<div className="filter-container">
    <button onClick={() => changeFilter()}>All</button>
    <button onClick={() => changeFilter(true)}>Completed</button>
    <button onClick={() => changeFilter(false)}>Not completed</button>
  </div>);
}
