import React from "react";

export function TodoItem({
  id,
  title,
  editTitle,
  isCompleted,
  isEditing,
  handleTodoStateChange,
  deleteTodo,
  changeTodoEditingState,
  handleChangeFromTodoInput,
  handleKeyDownFromTodoInput
}) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleTodoStateChange(id)}
      />
      {isEditing ? (
        <input autoFocus={true} value={editTitle} onChange={(e) => handleChangeFromTodoInput(e, id)} onKeyDown={(e)=>handleKeyDownFromTodoInput(e, id)}/>
      ) : (
        <span
          className={isCompleted ? "todo-title striked" : "todo-title"}
          onDoubleClick={() => changeTodoEditingState(id)}
        >
          {title}
        </span>
      )}
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
}
