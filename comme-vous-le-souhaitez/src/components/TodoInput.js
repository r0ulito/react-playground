import React, { useState } from "react";
import { createTodo } from "../slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoInput() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    id: 1,
    title: "",
    editTitle: "",
    isCompleted: false,
    isEditing: false,
  });
  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Escape":
        setNewTodo((prevState) => ({
          ...prevState,
          title: "",
        }));
        break;
      case "Enter":
        if (newTodo.title.trim() !== "") {
          dispatch(createTodo(newTodo));
          setNewTodo((prevState) => ({
            ...prevState,
            title: "",
            id: prevState.id + 1,
          }));
        }
        break;

      default:
        break;
    }
  };

  const handleChange = ({ target: { value: title } }) => {
    setNewTodo((prevState) => ({
      ...prevState,
      title,
      editTitle: title,
    }));
  };
  return (
    <input
      type="text"
      value={newTodo.title}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
