import React from "react";

export default function TodoItem({ id, title, editTitle, isCompleted, isEditing, handleTodoStateChange, deleteTodo, changeTodoEditingState, handleTodoInputKeyDown, handleTodoItemTitleChange}) {
  return <div className="todo-item">
    <input type="checkbox" checked={isCompleted} onChange={() => handleTodoStateChange(id)} />
    {
      isEditing ? <input type="text" value={editTitle} onKeyDown={(e) => handleTodoInputKeyDown(e, id)} onChange={(e) => handleTodoItemTitleChange(e, id)} /> : <span className={isCompleted ? 'todo striked' : 'todo'} onDoubleClick={() => changeTodoEditingState(id)}>{title}</span>
    }
    <button onClick={() => deleteTodo(id)}>X</button>

  </div>;
}
