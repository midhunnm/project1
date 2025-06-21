import React from 'react'
import Nav from './Components/Nav'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Login from './Components/login'
import Signup from './Components/signup'

const App = () => {

  return (

    <div>
        <Nav />
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}
export default App
