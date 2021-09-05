import React from 'react'

export default function TodoInput({OnInputChange, onKeyEvent, text}) {

    const handleKeyDownEvent = ({key}) => {
        onKeyEvent(key);
    }
    return (
        <div>
            <input value={text} type="text" name="title" id="title" onKeyDown={handleKeyDownEvent} onChange={({target: {value}}) => {OnInputChange(value)}} />
        </div>
    )
}
