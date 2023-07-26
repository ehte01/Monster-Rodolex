import React from 'react'
import { Card } from '../Card/Card'
import './CardList.css'

const CardList = ({monsters}) => {
  return (
    <div className='card-list'>
        {
        monsters.map((monster,i)=>{
         return (<Card key={i} monster={monster} i={i}/>)
        })
      }
    </div>
  )
}

export default CardList