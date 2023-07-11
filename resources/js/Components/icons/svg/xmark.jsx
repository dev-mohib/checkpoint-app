import React from 'react'

const XmarkIcon = ({className="w-6 h-6", stroke="black", fill="none"}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill} viewBox="0 0 24 24" strokeWidth={1.5} stroke={stroke} className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>

  )
}

export {XmarkIcon}