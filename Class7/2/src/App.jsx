import { useEffect } from "react"
import { change } from "./recoil_use"
import { useRecoilState } from "recoil"

function App() {
  const [x,setx]=useRecoilState(change)
useEffect(()=>{
  console.log(x)
},[x])

  return (
     <>
     <div>{x}</div>
     <button onClick={()=>{
      setx((c)=>c+1)
     }}>Ck</button>
     </>     
  )
}

export default App
