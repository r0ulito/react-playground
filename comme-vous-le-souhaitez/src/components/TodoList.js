import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  items,
  toggleIsCompleted,
  deleteTodo,
  changeTodoIsEditingState,
  handleKeyDownFromTodoInput,
  handleTitleChangeFromTodoInput,
  deleteAllCompleted,
}) {
  return (
    <>
      {items.find((item) => item.isCompleted) && (
        <button onClick={deleteAllCompleted}>Delete all Completed</button>
      )}
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleIsCompleted={toggleIsCompleted}
          deleteTodo={deleteTodo}
          changeTodoIsEditingState={changeTodoIsEditingState}
          handleKeyDownFromTodoInput={handleKeyDownFromTodoInput}
          handleTitleChangeFromTodoInput={handleTitleChangeFromTodoInput}
        />
      ))}
    </>
  );
}
