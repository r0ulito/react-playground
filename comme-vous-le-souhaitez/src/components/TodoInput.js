import React from "react";

export default function TodoInput({ title, handleChange, handleKeyDown }) {
  return <input type="text" value={title} onChange={handleChange} onKeyDown={handleKeyDown} />;
}
