import React, { useEffect, useRef } from "react";

export function TodoInput({ text, handleTitleChange, handleKeyDownEvent }) {
  const monSuperInput = useRef(null)

  useEffect(() => {
    monSuperInput.current.focus()
  }, [])

  return (
    <input
    ref={monSuperInput}
      type="text"
      value={text}
      onChange={({ target: { value } }) => handleTitleChange(value)}
      onKeyDown={({ key }) => handleKeyDownEvent(key)}
    />
  );
}
