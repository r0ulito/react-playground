import React, { useEffect, useState } from "react";
import { TodoItem } from ".";

export function TodoList({ items, handleTodoStateChange, deleteTodo, changeTodoEditingState, handleKeyDownFromTodoInput, handleChangeFromTodoInput, deleteAllCompleted }) {
  return (
    <>
    {items.find(todo => todo.isCompleted) && <button onClick={deleteAllCompleted}>Delete all completed</button>}
      {items.map((item) => (
        <TodoItem key={item.id} {...item} handleTodoStateChange={handleTodoStateChange} deleteTodo={deleteTodo} changeTodoEditingState={changeTodoEditingState} handleKeyDownFromTodoInput={handleKeyDownFromTodoInput} handleChangeFromTodoInput={handleChangeFromTodoInput} />
      ))}
    </>
  );
}
