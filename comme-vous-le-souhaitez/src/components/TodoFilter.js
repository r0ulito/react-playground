import React from "react";

export function TodoFilter({ changeFilter }) {
  return (
    <div>
      <button onClick={() => changeFilter('all')}>All</button>
      <button onClick={() => changeFilter('completed')}>Done</button>
      <button onClick={() => changeFilter('uncompleted')}>Not done</button>
    </div>
  );
}
