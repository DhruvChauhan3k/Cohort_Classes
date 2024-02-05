import React from 'react';
import { useState } from 'react';
import axios from 'axios';




export default function Reg() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    async function reginHandel(){
        try{
              const check=await axios.post("http://localhost:3001/reg",{
                email,password
              });
              if(check)
              {
                console.log("yeah")
              }
        }catch(e)
        {
            console.log({message:e.message});
        }
    }

  
  return (
    <div style={{textAlign:'center'}}>
        <input onChange={(e)=>{
            setEmail(e.target.value);
        }} placeholder='Email'/>
        <input onChange={(e)=>{
            setPassword(e.target.value);
        }} placeholder='Password'/>
        <button onClick={reginHandel} > Login </button>
    </div>
  )
}
