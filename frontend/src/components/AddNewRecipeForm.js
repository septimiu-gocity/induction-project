import React from "react";
import { useState, useEffect } from "react";

export default function AddNewRecipeForm() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [prepSteps, setPrepSteps] = useState([]);

    return (
        <div className="form-wrapper">
            <input
                type="text"
                placeholder="Dish Title"
                className="recipe-input title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            ></input>
            <div className="new-desc-wrapper">
                <input type="text" placeholder="Ingredients" className="recipe-input"></input>
                <br></br>
                <input type="text" placeholder="Preparation Steps" className="recipe-input"></input>
            </div>
        </div>
    );
}
