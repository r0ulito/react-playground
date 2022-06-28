import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  changeTodoIsCompletedState,
  changeTodoIsEditingState,
  updateTodoTitle,
  resetTodoTitle,
  updateTodo,
} from "../slices/todoSlice";

export default function TodoItem({
  id,
  title,
  editTitle,
  isCompleted,
  isEditing,
}) {
  const dispatch = useDispatch();

  const handleTodoInputKeyDown = (e, id) => {
    if (e.key === "Escape") {
      dispatch(resetTodoTitle({ id }));
    }

    if (e.key === "Enter") {
      dispatch(updateTodo({ id }));
    }
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => dispatch(changeTodoIsCompletedState(id))}
      />
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onKeyDown={(e) => handleTodoInputKeyDown(e, id)}
          onChange={(e) =>
            dispatch(updateTodoTitle({ id, text: e.target.value }))
          }
        />
      ) : (
        <span
          className={isCompleted ? "todo striked" : "todo"}
          onDoubleClick={() => dispatch(changeTodoIsEditingState(id))}
        >
          {title}
        </span>
      )}
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </div>
  );
}
