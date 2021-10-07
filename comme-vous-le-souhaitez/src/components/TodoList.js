import React from "react";
import { TodoItem } from ".";

export function TodoList({ items, changeTodoState, deleteTodo, changeTodoIsEditingProperty, editTodoTitle, handleKeyDownEventInEditInput, deleteAllCompleted }) {
  return(
    <>
      {
      items.find((todo) => todo.isCompleted) && <span onClick={deleteAllCompleted}>Delete all completed </span>
      }
      { items.map((item) => ( <TodoItem key={item.id} deleteTodo={deleteTodo} changeTodoState={changeTodoState} changeTodoIsEditingProperty={changeTodoIsEditingProperty} editTodoTitle={editTodoTitle} handleKeyDownEventInEditInput={handleKeyDownEventInEditInput} {...item} />)) }
    </>
  );
}
