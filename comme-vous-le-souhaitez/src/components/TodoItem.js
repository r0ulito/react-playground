import React, { useEffect, useState } from "react";

export function TodoItem({
  todo,
  handleTodoStateChange,
  deleteTodo,
  handleTodoEditingState,
  handleKeyDownFromTodoInput,
  handleChangeInTodoInput,
}) {

  const [oldTitle, setOldTitle] = useState(todo.title);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => handleTodoStateChange(todo.id)}
      />
      {todo.isEditing ? (
        <input
          type="text"
          onChange={(e) => handleChangeInTodoInput(e.target.value, todo.id)}
          onKeyDown={(e) => handleKeyDownFromTodoInput(e.key, oldTitle, todo.id)}
          value={todo.title}
        />
      ) : (
        <span
          className={todo.isCompleted ? "todo-item striked" : "todo-item"}
          onDoubleClick={() => handleTodoEditingState(todo.id)}
        >
          {todo.title}
        </span>
      )}
      <button onClick={() => deleteTodo(todo.id)}>x</button>
    </div>
  );
}
