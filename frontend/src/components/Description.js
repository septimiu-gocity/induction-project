import React from "react";

export default function Description({ ingredients, prepSteps }) {
    return (
        <div id="description">
            <h2 className="subtitle">Ingredients</h2>
            <ul className="desc-list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <br></br>
            <h2 className="desc-subtitle">Preparation Steps</h2>
            <ul className="desc-list">
                {prepSteps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
        </div>
    );
}
