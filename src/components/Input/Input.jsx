import React from 'react'
import './Input.css'

const Input = ({inputHandler}) => {


  return (
    <div>
        <input type="text" placeholder='Search monster...' onChange={inputHandler} className='input'/>
    </div>
  )
}

export default Input