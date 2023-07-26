import React from 'react'
import CardSection, { Card } from '../partials/cards'

const AdminDashboard = () => {
  const cards = [{name : "organization"},{name : "instructor"}, {name : "student"}, {name : "checkpoint"}]
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