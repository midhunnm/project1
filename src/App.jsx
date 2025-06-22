import React from 'react';
import Nav from './Components/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/login';
import Signup from './Components/signup';
import './App.css';
import Cart from './Components/Cart';
import Home from './Components/Home';

const App = () => {
  return (
    <div className="app-background">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
