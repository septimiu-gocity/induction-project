import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
export default function DeleteRecipeButton ({deleteRecipe, recipeId}) {
  return (
    <div onClick={() => deleteRecipe(recipeId)}> 
        <AiFillDelete/>
    </div>
  )
}
