import React, { useEffect, useState } from "react";

export default function TodoInput(props) {
  
  const [toDo, setToDo] = useState({
    id: 0,
    title: '',
    isCompleted : false,
    isEditing: false
  })
  const [title, setTitle] = useState("")
  const [title2, setTitle2] = useState("")

  useEffect(() => {
    console.log("title: " + title)
  }, [title])
  
  useEffect(() => {
    console.log("toDo: " + toDo)
  }, [toDo])
  
  const handleChange = (e)=>{
    // let a = (e.key === "Enter" || e.key === "Escape")
    // console.log('a: ' + a)
    if(!(e.key === "Enter" || e.key === "Escape")){
      console.log(e.key)
      setTitle(prevstate => prevstate + e.key)
    
    }
    else {
      if(e.key === "Enter"){
      if (title !== ""){
        setToDo({
          id: 0,
          title: title,
          isCompleted : false,
          isEditing: false
        })
      }

      }
      if(e.key === "Escape"){
      setTitle("")
      }
    }
  }
    const handle = (e) => {
      console.log(e.target.value)
    }
  return <div>
    <input type="text" onKeyDown={handleChange} value={title}></input>
    <input type="text" onChange={handle} value={title2}></input>
  </div>;
}
