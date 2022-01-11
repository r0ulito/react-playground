import React from "react";

export function TodoFilter({ handleFilterChange }) {
  return (<div>
    <button className="filter-button"onClick={() => handleFilterChange()}>All</button>
    <button className="filter-button"onClick={() => handleFilterChange(true)}>Completed</button>
    <button className="filter-button"onClick={() => handleFilterChange(false)}>Not completed</button>
  </div>);
}
