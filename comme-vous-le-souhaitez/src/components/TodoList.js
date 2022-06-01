import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  items,
  handleTodoStateChange,
  deleteTodo,
  changeTodoEditingState,
  handleTodoInputKeyDown,
  handleTodoItemTitleChange,
  handleTodosMapping,
  handleTodoDeleting
}) {
  return (
    <>
      <div className="delete-button-container">
      {items.find((item) => item.isCompleted) && (
        <button onClick={() => handleTodoDeleting()}>Delete all completed</button>
      )}
      </div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleTodoStateChange={handleTodoStateChange}
          deleteTodo={deleteTodo}
          changeTodoEditingState={changeTodoEditingState}
          handleTodoInputKeyDown={handleTodoInputKeyDown}
          handleTodoItemTitleChange={handleTodoItemTitleChange}
          handleTodosMapping={handleTodosMapping}
          handleTodoDeleting={handleTodoDeleting}
        />
      ))}
    </>
  );
}
