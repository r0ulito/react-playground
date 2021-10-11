import React from "react";

export function TodoFilter({ setCurrentFilter }) {
  return (
    <div className="filter-container">
      <button className="filter-button" onClick={() => setCurrentFilter('all')}>All</button>
      <button className="filter-button" onClick={() => setCurrentFilter('complete')}>Completed</button>
      <button className="filter-button" onClick={() => setCurrentFilter('uncomplete')}>Not completed</button>
    </div>
  );
}
