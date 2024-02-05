import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Reg from './Reg';

function App() {
  return(
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/reg' element={<Reg/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App;
