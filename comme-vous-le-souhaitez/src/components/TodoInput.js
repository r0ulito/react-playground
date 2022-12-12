import React, { forwardRef } from "react";

const TodoInput = forwardRef(
  ({ title, handleTitleChange, handleKeyDown }, ref) => (
    <input
      ref={ref}
      type="text"
      value={title}
      onChange={(e) => handleTitleChange(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  )
);

export default TodoInput;
