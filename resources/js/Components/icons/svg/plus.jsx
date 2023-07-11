import React from 'react'

export const PlusIcon = ({className="w-6 h-6", stroke="black"}) => {
  return (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       className={className} viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
        <g>
            <line fill="none" stroke={stroke} strokeWidth="2" strokeMiterlimit="10" x1="32" y1="50" x2="32" y2="14"/>
            <line fill="none" stroke={stroke} strokeWidth="2" strokeMiterlimit="10" x1="14" y1="32" x2="50" y2="32"/>
        </g>
        <g>
            <circle fill="none" stroke={stroke} strokeWidth="2" strokeMiterlimit="10" cx="32" cy="32" r="30.999"/>
        </g>
    </svg>
  )
}
