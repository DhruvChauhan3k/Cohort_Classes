import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import {Suspense, lazy } from "react"
import Contact from "./contact"
const Desc=lazy(()=>import('./Desc'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contact/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/desc" element={<Suspense fallback={"...loading"}><Desc></Desc></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
