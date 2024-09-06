import React from 'react'
import myImage from "../assets/image.jpg"; // Go up one level if it's in src/assets



export default function() {
  return (
    <div>
        <h1>componet</h1>
        <img src={myImage} alt="My Image" />

        <button onClick={handle}></button>


        

    </div>
  )
}
