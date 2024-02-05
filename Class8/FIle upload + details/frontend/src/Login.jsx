import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
    const navigate=useNavigate();


    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [home,setHome]=useState(false);

    async function loginHandel(){
        try{
              const check=await axios.post("http://localhost:3001/login",{
                email,password
              });
              if(check)
              {
                console.log("yeah");
                setHome(true)
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
        <button onClick={loginHandel} > Login </button>
        
        {home && navigate('/')}
    </div>
  )
}
