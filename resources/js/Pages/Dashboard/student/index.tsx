import React from 'react'
import { Card } from '../partials/cards'

const StudentDashboard = () => {
  const cards = [{name : "Checkpoints"}]
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

export default StudentDashboard