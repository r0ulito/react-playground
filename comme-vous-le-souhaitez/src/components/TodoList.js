import React from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";

import { deleteAllCompleted } from "../slices/todoSlice";

export default function TodoList() {
  const items = useSelector((state) => state.todos.data);
  const filter = useSelector((state) => state.todos.filter);

  const filteredItems = items.filter((item) => {
    if(filter === true) {
      return item.isCompleted;
    }
    if(filter === false) {
      return !item.isCompleted;
    }
    return true;
  });
  
  const dispatch = useDispatch();
  return (
    <>
      {filteredItems.find((item) => item.isCompleted) && (
        <button onClick={() => dispatch(deleteAllCompleted())}>
          Delete all Completed
        </button>
      )}
      {filteredItems.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        />
      ))}
    </>
  );
}
