import React from "react";

export function TodoInput({ title, handleChange, handleKeyDown }) {
  return (
    <input type='text' value={title} onChange={handleChange} onKeyDown={handleKeyDown} />
  );
}
