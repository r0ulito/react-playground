import React from "react";
import { TodoItem } from ".";

export function TodoList({
  items,
  handleTodoStateChange,
  deleteTodo,
  handleTodoEditingState,
  handleKeyDownFromTodoInput,
  handleChangeInTodoInput,
  deleteAllCompleted
}) {
  return (
    <>
    {
      items.find((todo) => todo.isCompleted) && <button onClick={deleteAllCompleted}>Delete all completed</button>
    }
      {items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          handleTodoStateChange={handleTodoStateChange}
          deleteTodo={deleteTodo}
          handleTodoEditingState={handleTodoEditingState}
          handleKeyDownFromTodoInput={handleKeyDownFromTodoInput}
          handleChangeInTodoInput={handleChangeInTodoInput}
        />
      ))}
    </>
  );
}
