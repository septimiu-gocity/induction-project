import React from 'react'
import {AiFillSave} from 'react-icons/ai'
export default function EditButton({saveEditRecipe}) {
  return (
    <div id='edit-button' onClick={saveEditRecipe}> 
        <AiFillSave/>
    </div>
  )
}
