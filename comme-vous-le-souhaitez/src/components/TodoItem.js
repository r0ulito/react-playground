import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare, faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({
  onCompletionChange,
  onDelete,
  onEditing,
  title,
  isCompleted,
  isEditing,
  changeTodoTitle,
  changeTodoEditingState,
  id,
}) {
  return (
    <div className="todo-item">
      {isCompleted ? (
        <FontAwesomeIcon
          onClick={() => onCompletionChange(id, false)}
          icon={faTimes}
          style={{ color: "red" }}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => onCompletionChange(id, true)}
          icon={faCheckSquare}
          style={{ color: "green" }}
        />
      )}
      {isEditing ? (
        <input
          type="text"
          onBlur={() => changeTodoEditingState("Escape", id)}
          onChange={({ target: { value } }) => changeTodoTitle(id, value)}
          onKeyDown={({ key }) => changeTodoEditingState(key, id)}
          value={title}
        />
      ) : (
        <span
          onDoubleClick={() => onEditing(id)}
          className={isCompleted ? "todo-title striked" : "todo-title"}
        >
          {title}
        </span>
      )}
      <FontAwesomeIcon onClick={() => onDelete(id)} icon={faTrashAlt} style={{color: 'red'}}/>
    </div>
  );
}
