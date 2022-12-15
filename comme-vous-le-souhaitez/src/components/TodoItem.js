import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import {
  toggleIsCompleted,
  deleteTodo,
  changeTodoIsEditingState,
  handleTitleChangeFromTodoInput,
} from "../slices/todoSlice";

export default function TodoItem({
  id,
  title,
  editTitle,
  isCompleted,
  isEditing,
}) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(title);

  const handleKeyDownFromTodoInput = (e, id) => {
    if (e.key === "Enter") {
      if (!e.target.value) return;
      dispatch(handleTitleChangeFromTodoInput({ id, value: e.target.value }));
    }

    if (e.key === "Escape") {
      dispatch(changeTodoIsEditingState(id));
      setValue(title);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(toggleIsCompleted(id))}
      />
      {isEditing ? (
        <input
          autoFocus={true}
          value={value}
          onKeyDown={(e) => handleKeyDownFromTodoInput(e, id)}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <span
          className={isCompleted ? "todo-title striked" : "todo-title"}
          onDoubleClick={() => dispatch(changeTodoIsEditingState(id))}
        >
          {title}
        </span>
      )}

      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </div>
  );
}
