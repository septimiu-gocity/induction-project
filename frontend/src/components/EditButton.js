import React from 'react'
import {AiFillEdit} from 'react-icons/ai'
export default function EditButton({editRecipe}) {
  return (
    <div id='edit-button' onClick={editRecipe}> 
        <AiFillEdit/>
    </div>
  )
}
