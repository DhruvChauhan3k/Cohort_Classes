import React from 'react';
import { useState, memo } from "react";
function App() {
  const [title,setTitle]=useState()
  const [desc,setDesc]=useState()
  const [todo,setTodo]=useState([])
  return (
    <div>
         <input placeholder='Title' style={{margin:'10px',}} onChange={(e)=>{
          setTitle(e.target.value);
         }}></input>
         <input placeholder='Description' style={{margin:'10px',}} onChange={(e)=>{
          setDesc(e.target.value);
         }}></input>        
         <button onClick={(e)=>{
          setTodo([...todo,{title:title,desc:desc}])
         }}>Add</button>
         <Render todo={todo} setTodo={setTodo}></Render>
    </div>
  );
}


const Render = memo(({ todo,setTodo }) => {

  function Delete(index)
{
  const updatedTodo = todo.filter((_, i) => i !== index);
  setTodo(updatedTodo)
}

  return (
    <div>
      {todo.map((t, index) => (
        <div key={index}>
          <li style={{margin:'10px'}}>{t.title} <button style={{margin:'10px'}} onClick={()=>Delete(index)}>Done</button></li>
          <p style={{margin:'30px'}}>{t.desc}</p>
          
        </div>
      ))}
    </div>
  );
});


export default App;
