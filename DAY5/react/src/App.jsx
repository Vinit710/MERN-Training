import React from 'react'

import { useState } from 'react'

export default function App() {
  const[count,setCount]=useState(0);

  function handle(){
    setInterval(() => {
      setCount(prev=>prev+1)
      
    }, 1000);
  }

  function reset(){
    setCount(prev=>0)
  }

  function stop(){
    
    
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handle}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}
