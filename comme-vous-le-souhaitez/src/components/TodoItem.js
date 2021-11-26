import React from "react";

export function TodoItem({
  id,
  title,
  editTitle,
  isCompleted,
  isEditing,
  changeTodoState,
  deleteTodo,
  changeTodoEditingState,
  changeTodoTitle,
  handleKeyDownInTodoInput
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => changeTodoState(id)}
      />

      {/* Title SI isEditing === false
          Sinon input
       */}
      {isEditing ? (
        <input type="text" onChange={(e) => changeTodoTitle(id, e.target.value)} value={editTitle} onKeyDown={({ key }) =>handleKeyDownInTodoInput(id, key)} />
      ) : (
        <span
          className={isCompleted ? "striked" : ""}
          onDoubleClick={() => changeTodoEditingState(id)}
        >
          {title}
        </span>
      )}
      {/* <span className={isCompleted ? "striked" : ""} onDoubleClick={() => changeTodoEditingState(id)}>{title}</span> */}
      <button onClick={() => deleteTodo(id)}>X</button>
    </div>
  );
}
