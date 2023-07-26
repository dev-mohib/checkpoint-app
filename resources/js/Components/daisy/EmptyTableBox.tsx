import React from 'react'

export const EmptyTableBox = ({text = "Not Added"} : {text?:string}) => (
    <div className='h-32 flex-c-c bg-base-100 shadow-md'>
      <h1 className='text-gray-400 font-extrabold text-lg'>{text}</h1>
    </div>
)
