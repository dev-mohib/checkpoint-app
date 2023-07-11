import React from 'react'

export const BellIcon = ({className="w-6 h-6", stroke="black"}) => {
  return (
    <svg className={className}  version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	  viewBox="0 0 32 32" style={{enableBackground:"new 0 0 32 32"}} xmlSpace="preserve">
        <path 
            fill="none" stroke={stroke} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
            d="M27.8,23.2l-1.1-1.7c-1.9-2.8-2.9-6.1-2.9-9.5c0-3.6-2.4-6.5-5.6-7.5C17.9,3.6,17,3,16,3s-1.9,0.6-2.2,1.5
            c-3.2,1-5.6,3.9-5.6,7.5c0,3.4-1,6.7-2.9,9.5l-1.1,1.7C3.7,24,4.2,25,5.2,25h21.6C27.8,25,28.3,24,27.8,23.2z"/>
        <path 
            fill="none" stroke={stroke} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"
            d="M20,25c0,2.2-1.8,4-4,4s-4-1.8-4-4"/>
    </svg>
  )
}
