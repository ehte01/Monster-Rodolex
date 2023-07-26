import React from 'react'
import './Card.css'

export const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.i}/?set=set2`} alt="" />
        <h3>{props.monster.name}</h3>
        <h4>{props.monster.email}</h4>
    </div>
  )
}
