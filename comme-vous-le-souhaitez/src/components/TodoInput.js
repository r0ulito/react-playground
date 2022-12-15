import React from "react";

import { addTodo } from "../slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoInput() {
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
      if (!e.target.value) return;
      dispatch(addTodo(e.target.value));
      document.querySelector("#todo-input").value = "";
    }

    if (e.key === "Escape") {
      document.querySelector("#todo-input").value = "";
    }
  };
  return (
    <input
      type="text"
      id="todo-input"
      onKeyDown={handleKeyDown}
    />
  );
}
