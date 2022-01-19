import React, { useEffect, useState } from "react";

/*
focus,
blur
 */

export default function TodoItem({
  id,
  title,
  editTitle,
  isCompleted,
  isEditing,
  toggleIsCompletedProperty,
  deleteTodo,
  changeTodoIsEditingProperty,
  handleChangeFromTodoInput,
  handleKeyDownFromTodoInput,
  handleCancel
}) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleIsCompletedProperty(id)}
      />
      {isEditing ? (
        <input
          autoFocus={true}
          value={editTitle}
          onChange={(e) => handleChangeFromTodoInput(e, id)}
          onBlur={() => handleCancel(id)}
          onKeyDown={(e) => handleKeyDownFromTodoInput(e.key, id)}
        />
      ) : (
        <span
          className={isCompleted ? "striked" : ""}
          onDoubleClick={() => changeTodoIsEditingProperty(id)}
        >
          {title}
        </span>
      )}
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
}
