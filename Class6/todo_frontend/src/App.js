import React from 'react';
import { useState, useEffect } from "react";
function App() {
  const [title,setTitle]=useState()
  const [desc,setDesc]=useState()
  const [todo,setTodo]=useState([])
  useEffect(() => {
    todo.map((e)=>{
      <div>
        {e.title}
        {e.desc}
      </div>
      return null;
    })
   },[todo]);
  return (
    <div>
       Title:<input onChange={(e)=>{
        setTitle(e.target.value)
       }}></input><span></span>  
       Description:<input onChange={(e)=>{
        setDesc(e.target.value)
       }}></input><span></span>
       <button onClick={()=>{
        setTodo([...todo, { title: title, desc: desc }]);
       }}> Create</button>     
    </div>
  );
}

export default App;
