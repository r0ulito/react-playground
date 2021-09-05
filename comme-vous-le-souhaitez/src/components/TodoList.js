import React, { useEffect } from 'react'
import TodoItem from './TodoItem';

// onChangeTodoTitle

export default function TodoList({onTodoCompletionChange, onChangeTodoTitle, onEditingStateChange, OnKeyDownInEditInput, onDeleteTodo, items}) {
    useEffect(() => {
        // console.log(items);
    },[items])
    return (
        <div>
            { items.length > 0 ? 
                items.map((todo) => (<TodoItem changeTodoEditingState={OnKeyDownInEditInput} onEditing={onEditingStateChange} changeTodoTitle={onChangeTodoTitle} onCompletionChange={onTodoCompletionChange} onDelete={onDeleteTodo} key={todo.id} {...todo}/>))
            :
            null
            
            }
        </div>
    )
}