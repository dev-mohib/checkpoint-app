import React from 'react'

const CardSection = () => {
  const cards = [{name : "Students"}, {name : "Instructors"}, {name : "Organizations"}, {name : "Checkpoints"}]
  return (
    <div className='flex justify-around'>
      {
        cards.map(card => <Card name={card.name}  key={card.name}/>)
      }
    </div>
  )
}


const Card = ({name=""} : any) => {

  return (
    <div className="card w-1/5 h-40 bg-base-100 shadow-xl image-full">
      <figure><img src="/laptop.jpg" alt="Shoes" className='w-96'/></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
        <div className="card-actions justify-end mt-16">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  )
}
export default CardSection