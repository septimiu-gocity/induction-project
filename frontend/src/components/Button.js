import React from 'react'

export default function Button ({text, className}) { 
  return (
    <button className={`btn ${className}`}   >{text}</button>
  )
}
