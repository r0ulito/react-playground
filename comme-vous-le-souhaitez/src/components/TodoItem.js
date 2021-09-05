import React from 'react'

export default function TodoItem({onCompletionChange, onDelete, onEditing, title, isCompleted, isEditing, changeTodoTitle, changeTodoEditingState, id}) {
    return (
        <div className='todo-item'>
            {
            isCompleted ? 
                <span onClick={() => onCompletionChange(id, false)} className="checked"> uncomplete </span>
            : 
                <span onClick={() => onCompletionChange(id, true)}  className="unchecked"> complete </span>
            }
            {isEditing ? 
                <input type="text" onBlur={() => changeTodoEditingState("Escape", id)} onChange={({target: {value}}) =>changeTodoTitle(id, value)} onKeyDown={({key}) =>changeTodoEditingState(key, id)} value={title} />
            :
            <span onDoubleClick={() => onEditing(id)} className={isCompleted ? "todo-title striked" : "todo-title"}>{title}</span>                
            }
            <span className="garbage" onClick={() => onDelete(id)}> delete</span>
            
        </div>
    )
}
