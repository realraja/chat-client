import React, { lazy } from 'react'
import AnimatedVanta from './components/backgrounds/AnimatedVanta'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const Login = lazy(()=> import('./Pages/Login'));
const Register = lazy(()=> import('./Pages/Reginster'));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
        {/* // <Route element={<}>
        // </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
