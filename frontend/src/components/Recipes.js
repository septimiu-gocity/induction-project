import React from "react";
import Recipe from "./Recipe";
export default function Recipes({ recipes, saveEditedRecipe, deleteRecipe }) {
  
    return (
        <React.Fragment>
            {recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe} saveEditedRecipe={saveEditedRecipe} deleteRecipe={deleteRecipe}></Recipe>
            ))}
        </React.Fragment>
    );
}
