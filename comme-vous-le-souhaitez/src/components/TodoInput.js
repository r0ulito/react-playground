import React from "react";

export function TodoInput({ handleChange, todoTitle, handleKeyDown }) {
  return <>
  <input type="text" onChange={handleChange} value={todoTitle} onKeyDown={handleKeyDown}></input>
  </>;
}
