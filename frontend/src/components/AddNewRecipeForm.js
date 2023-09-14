import React from "react";

export default function AddNewRecipeForm() {
    return (
        <div className="form-wrapper">
            <input type="text" placeholder="Dish Title" className="recipe-input title"></input>
            <div className="new-desc-wrapper">
                <input type="text" placeholder="Ingredients" className="recipe-input"></input>
                <br></br>
                <input type="text" placeholder="Preparation Steps" className="recipe-input"></input>
            </div>
        </div>
    );
}
