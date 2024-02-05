import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {
  return (
    <div style={{textAlign:'center'}}>
        <h1>HEY WELCOME!</h1>
        <Link to='/Login' >
        <button>Login</button></Link>
        <Link to='/Reg' ><button>Register</button></Link>
    </div>
  )
}
