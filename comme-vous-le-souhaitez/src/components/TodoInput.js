import React from "react";

export function TodoInput(props) {
  let { todoTitle, handleChange, handleKeyDown } = props;
  return(
    <>
    <input type="text" value={todoTitle} onChange={handleChange} onKeyDown={handleKeyDown} />
    </>
  );
}
