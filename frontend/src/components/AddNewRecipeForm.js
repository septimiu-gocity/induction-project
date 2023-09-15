import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function AddNewRecipeForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [prepSteps, setPrepSteps] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000000 + 1),
            title: title,
            ingredients: ingredients,
            prepSteps: prepSteps,
        });
    };

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    const handlePrepStepChange = (index, value) => {
        const newPrepSteps = [...prepSteps];
        newPrepSteps[index] = value;
        setPrepSteps(newPrepSteps);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, ""]);
    };

    const handleAddPrepStep = () => {
        setPrepSteps([...prepSteps, ""]);
    };

    return (
        <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Dish Title"
                    className="recipe-input recipe-input-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <div className="new-desc-wrapper">
                    <h2 className="subtitle">Ingredients</h2>
                    <ul className="desc-list">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <input
                                    className="recipe-input"
                                    type="text"
                                    value={ingredient}
                                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                                ></input>
                            </li>
                        ))}
                    </ul>
                    <Button type="button" text="Add Ingredient" onClick={handleAddIngredient} />
                    <br></br>
                    <h2 className="subtitle">Preparation Steps</h2>

                    <ul className="desc-list">
                        {prepSteps.map((prepStep, index) => (
                            <li key={index}>
                                <input
                                    className="recipe-input"
                                    type="text"
                                    value={prepStep}
                                    onChange={(e) => handlePrepStepChange(index, e.target.value)}
                                ></input>
                            </li>
                        ))}
                    </ul>
                    <Button type="button" text="Add Prep Step" onClick={handleAddPrepStep} />
                    <br></br>
                    <div className="new-desc-wrapper">
                        <Button type="submit" text="Add New Recipe" />
                    </div>
                </div>
            </form>
        </div>
    );
}
