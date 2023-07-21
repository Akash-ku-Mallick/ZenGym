import React from 'react'
import './App.css'

function GymLocator({prop}) {
  return (
    <div className='GymLocator'>
      <button className='closeBtn' onClick={()=>{prop(false)}}>X</button>
      <h1> Gym Locator</h1>
    </div>
  )
}

export default GymLocator