import React from 'react'
import { Card } from '../partials/cards'

const InstructorDashboard = () => {
  const cards = [{name : "student"},{name : "checkpoint"}]
  return (
    <div>
      <div className='flex justify-around'>
        {
          cards.map((card, i) => <Card key={i}  name={card.name}/>)
        }      
      </div>
    </div>
  )
}

export default InstructorDashboard