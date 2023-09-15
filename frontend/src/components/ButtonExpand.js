import React from 'react'
import {AiFillCaretRight} from 'react-icons/ai'
export default function ButtonExpand ({expandRecipe}) {
  return (
    <div onClick={expandRecipe}> 
        <AiFillCaretRight/>
    </div>
  )
}
