import React, { useEffect, useState } from "react";

export function TodoItem({
  id,
  title,
  isCompleted,
  isEditing,
  changeTodoState,
  deleteTodo,
  changeTodoIsEditingProperty,
  editTodoTitle,
  handleKeyDownEventInEditInput
}) {
  const [oldTitle, setOldTitle] = useState(title);

  useEffect(() => {
    console.log(oldTitle)    
  }, [oldTitle])

  return (
    <div>
      <span onClick={() => changeTodoState(id)}>
        {isCompleted ? "Uncomplete " : "Complete "}
      </span>
      {isEditing ?
      <input type="text" value={title} onChange={({ target: { value }}) => editTodoTitle(value, id)} onKeyDown={({ key }) => handleKeyDownEventInEditInput(key, id, oldTitle)} autoFocus/>
      :
      <span className={isCompleted ? "striked" : ""} onDoubleClick={() => {changeTodoIsEditingProperty(id)}}>{title} </span>
      
    }
      <span onClick={() => deleteTodo(id)}>Delete</span>
    </div>
  );
}
