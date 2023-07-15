import React from 'react'
import CardSection, { Card } from '../partials/cards'

const AdminDashboard = () => {
  const cards = [{name : "Students"}, {name : "Instructors"}, {name : "Organizations"}, {name : "Checkpoints"}]
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

export default AdminDashboard