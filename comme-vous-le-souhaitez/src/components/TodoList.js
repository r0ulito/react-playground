import React from "react";
import { TodoItem } from ".";

export function TodoList({
  items,
  changeTodoState,
  deleteTodo,
  deleteAllCompleted,
  changeTodoEditingState,
  changeTodoTitle,
  handleKeyDownInTodoInput,
}) {
  return (
    <>
      {items.find((todo) => todo.isCompleted) && (
        <button onClick={deleteAllCompleted}>Delete all completed</button>
      )}

      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          changeTodoState={changeTodoState}
          deleteTodo={deleteTodo}
          changeTodoEditingState={changeTodoEditingState}
          changeTodoTitle={changeTodoTitle}
          handleKeyDownInTodoInput={handleKeyDownInTodoInput}
        />
      ))}
    </>
  );
}
