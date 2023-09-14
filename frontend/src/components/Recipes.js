import React from "react";
import Recipe from "./Recipe";
export default function Recipes({ recipes }) {
  
    return (
        <React.Fragment>
            {recipes.map((recipe, index) => (
                <Recipe key={index} recipe={recipe}></Recipe>
            ))}
        </React.Fragment>
    );
}
