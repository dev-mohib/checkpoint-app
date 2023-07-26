import { Link } from '@inertiajs/react'
import React from 'react'

const CardSection = ({}) => {
  const cards = [{name : "students"}, {name : "instructor"}, {name : "organization"}, {name : "checkpoint"}]
  return (
    <div className='flex justify-around'>
      {
        cards.map(card => <Card name={card.name}  key={card.name}/>)
      }
    </div>
  )
}


export const Card = ({name=""} : {name : string}) => {

  return (
    <div className="card w-1/5 h-40 bg-base-100 shadow-xl image-full">
      <figure><img src="/dashboard.png" alt="Shoes" className='w-96'/></figure>
      <div className="card-body">
        <h2 className="card-title capitalize">{name}s</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end mt-16">
          <Link href={route(name + '.index')} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  )
}
export default CardSection