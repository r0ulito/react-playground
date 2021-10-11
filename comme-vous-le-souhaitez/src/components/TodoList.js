import React from "react";
import { TodoItem } from ".";

export function TodoList({ items, handleCheckbox, deleteTodo, changeEditingState, editTitle, keyDownEvent }) {

  

  return (
    <>{items.map((item) => <TodoItem key={item.id} todo={item} handleCheckbox={handleCheckbox} deleteTodo={deleteTodo} changeEditingState={changeEditingState} editTitle={editTitle} keyDownEvent={keyDownEvent} />)}</>
  );
}
