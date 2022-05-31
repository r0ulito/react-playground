import React, { useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ items, handleTodoStateChange, deleteAllCompleted, deleteTodo, changeTodoEditingState, handleTodoInputKeyDown, handleTodoItemTitleChange }) {
  return <>
  {items.find(item => item.isCompleted) && <button onClick={deleteAllCompleted}>Delete all completed</button>}
  {items.map(todo => <TodoItem key={todo.id} {...todo} handleTodoStateChange={handleTodoStateChange} deleteTodo={deleteTodo} changeTodoEditingState={changeTodoEditingState} handleTodoInputKeyDown={handleTodoInputKeyDown} handleTodoItemTitleChange={handleTodoItemTitleChange} />)}
  </>;
}
