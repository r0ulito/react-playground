import React from "react";

export default function TodoFilter({ handleFilterChange }) {
  return <div className="button-container">
    <button className="filter-button" onClick={() => handleFilterChange()}>All</button>
    <button className="filter-button" onClick={() => handleFilterChange(true)}>Completed</button>
    <button className="filter-button" onClick={() => handleFilterChange(false)}>Not completed</button>   
  </div>;
}
