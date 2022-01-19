import React from "react";

export function TodoInput({ title, handleChange, handleKeyDown }) {
  return <input value={title} type="text" onChange={({target: { value }}) => handleChange(value)} onKeyDown={handleKeyDown} />;
}
