import React from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
export default function ButtonRetract ({retractRecipe}) {
  return (
    <div onClick={retractRecipe}> 
        <AiFillCaretDown/>
    </div>
  )
}
