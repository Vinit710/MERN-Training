import React from 'react'
import { useEffect } from 'react';

import { useState } from 'react'
import Navbar from './components/Navbar';

import Signup from './components/signup';
import Login from './components/login';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import './App.css'

export default function App() {
  const[count,setCount]=useState(0);

  function handle(){
    setCount(prev=>prev+1)
    
  }




  useEffect(()=>{
    console.log("rederedring.................")
    console.log("complete")
  },[count])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handle}>Render </button>
      <Navbar username={"vinit"}></Navbar>

      <BrowserRouter>
      <a href='/login'>login button</a>

      <Routes>
        <Route path="/" element={<Signup></Signup>} />
        <Route path="/login" element={<Login></Login>} />
        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  )
}
