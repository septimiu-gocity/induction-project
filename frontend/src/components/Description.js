import React, { useEffect } from "react";
import { useRef } from "react";

export default function Description({ recipeId, ingredients, prepSteps, isEditing, getNewIngredients, getNewSteps }) {
    const ingUlRef = useRef(null);
    const stepsUlRef = useRef(null);

    const getEditedIngredients = () => {
        if (ingUlRef.current) {
            const liElements = Array.from(ingUlRef.current.querySelectorAll("li"));
            const tokens = liElements.map((li) => li.textContent.trim());
            return tokens;
        }
    };

    const getEditedPrepSteps = () => {
        if (stepsUlRef.current) {
            const liElements = Array.from(stepsUlRef.current.querySelectorAll("li"));
            const tokens = liElements.map((li) => li.textContent.trim());
            return tokens;
        }
    };

    return (
        <div id="description">
            <h2 className="subtitle">Ingredients</h2>
            <ul
                onInput={() => {
                    getNewIngredients(getEditedIngredients());
                }}
                ref={ingUlRef}
                contentEditable={isEditing}
                className="desc-list"
            >
                {ingredients.map((ingredient, index) => (
                    <li contentEditable={isEditing} key={index}>
                        {ingredient}
                    </li>
                ))}
            </ul>
            <br></br>
            <h2 className="desc-subtitle">Preparation Steps</h2>
            <ul
                onInput={() => {
                    getNewSteps(getEditedPrepSteps());
                }}
                ref={stepsUlRef}
                contentEditable={isEditing}
                className="desc-list"
            >
                {prepSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
        </div>
    );
}
