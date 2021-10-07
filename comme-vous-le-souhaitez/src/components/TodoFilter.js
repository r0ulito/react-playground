import React from "react";

export function TodoFilter({ changeFilter }) {
  return(
    <div>
      <span onClick={() => changeFilter('all')}>All </span>
      <span onClick={() => changeFilter('completed')}>Completed </span>
      <span onClick={() => changeFilter('uncompleted')}> Uncompleted</span>
    </div>
  );
}
