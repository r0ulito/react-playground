import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

import { deleteAllCompletedTodos } from "../slices/todoSlice";

import { selectTodos } from "../slices/todoSlice";

import { useSelector, useDispatch } from "react-redux";

export default function TodoList() {
  const items = useSelector(selectTodos);
  const [filteredTodos, setFilteredTodos] = useState(items);

  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (filter === false) {
      setFilteredTodos(items.filter((todo) => !todo.isCompleted));
      return;
    } else if (filter === true) {
      setFilteredTodos(items.filter((todo) => todo.isCompleted));
      return;
    }

    setFilteredTodos(items);
  }, [filter, items]);
  return (
    <>
      <div className="delete-button-container">
        {items.find((item) => item.isCompleted) && (
          <button onClick={() => dispatch(deleteAllCompletedTodos())}>
            Delete all completed
          </button>
        )}
      </div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </>
  );
}
