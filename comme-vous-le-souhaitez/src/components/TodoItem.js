import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export function TodoItem({
  todo: { id, title, isCompleted, isEditing },
  handleCheckbox,
  deleteTodo,
  changeEditingState,
  editTitle,
  keyDownEvent,
  ...props
}) {
  const [oldTitle, setOldTitle] = useState(title)
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheckbox(id, "isCompleted")}
      />{" "}
      {isEditing ? 
      <input type="text" value={title} onChange={({ target: { value } }) => editTitle(value, id)} onKeyDown={({ key }) => keyDownEvent(key, id, oldTitle)} /> 
      : 
      <span className={isCompleted ? "todo-title striked" : "todo-title"} onDoubleClick={() => changeEditingState(id, "isEditing")}>
        {title}
      </span> }
      <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteTodo(id)} style={{color : "red", marginLeft: "10px"}} />
    </div>
  );
}
