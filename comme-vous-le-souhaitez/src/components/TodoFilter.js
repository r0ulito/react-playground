import React from "react";

export default function TodoFilter({ handleFilterChange }) {
  return (
    <div>
      <button onClick={() => handleFilterChange()}>All</button>
      <button onClick={() => handleFilterChange(true)}>Completed</button>
      <button onClick={() => handleFilterChange(false)}>Not completed</button>
    </div>
  );
}
