import React from "react";

export default function TodoItem({
  id,
  title,
  editTitle,
  isCompleted,
  isEditing,
  toggleIsCompleted,
  deleteTodo,
  changeTodoIsEditingState,
  handleKeyDownFromTodoInput,
  handleTitleChangeFromTodoInput,
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleIsCompleted(id)}
      />
      {isEditing ? (
        <input
          autoFocus={true}
          value={editTitle}
          onKeyDown={(e) => handleKeyDownFromTodoInput(e.key, id)}
          onChange={(e) => handleTitleChangeFromTodoInput(e, id)}
        />
      ) : (
        <span
          className={isCompleted ? "todo-title striked" : "todo-title"}
          onDoubleClick={() => changeTodoIsEditingState(id)}
        >
          {title}
        </span>
      )}

      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
}
