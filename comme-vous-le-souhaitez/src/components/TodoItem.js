import React from "react";

export default function TodoItem({
  id,
  title,
  editTitle,
  isCompleted,
  isEditing,
  handleTodosMapping,
  handleTodoInputKeyDown,
  handleTodoItemTitleChange,
  handleTodoDeleting
}) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleTodosMapping(id, "isCompleted")}
      />
      {isEditing ? (
        <input
          type="text"
          value={editTitle}
          onKeyDown={(e) => handleTodoInputKeyDown(e, id)}
          onChange={(e) => handleTodoItemTitleChange(e, id)}
        />
      ) : (
        <span
          className={isCompleted ? "todo striked" : "todo"}
          onDoubleClick={() => handleTodosMapping(id, "isEditing")}
        >
          {title}
        </span>
      )}
      <button onClick={() => handleTodoDeleting(id)}>X</button>
    </div>
  );
}
