import React from "react";
import TodoItem from "./TodoItem";

export function TodoList({
  items,
  toggleIsCompletedProperty,
  deleteTodo,
  changeTodoIsEditingProperty,
  handleChangeFromTodoInput,
  handleKeyDownFromTodoInput,
  handleCancel,
  deleteAllCompleted
}) {
  return (
    <>
    <button className={items.find(todo => todo.isCompleted) ? "visible" : "hidden"} onClick={deleteAllCompleted}>Delete all completed</button>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleIsCompletedProperty={toggleIsCompletedProperty}
          deleteTodo={deleteTodo}
          changeTodoIsEditingProperty={changeTodoIsEditingProperty}
          handleChangeFromTodoInput={handleChangeFromTodoInput}
          handleKeyDownFromTodoInput={handleKeyDownFromTodoInput}
          handleCancel={handleCancel}
        />
      ))}
    </>
  );
}
