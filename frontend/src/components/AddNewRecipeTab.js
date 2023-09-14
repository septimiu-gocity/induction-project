import React from "react";
import Button from "./Button";

export default function AddNewRecipeTab() {
    return (
        <div id="recipe-tab">
            <Button text="+" className="btn-plus"/>
            <h3>Add New Recipe</h3>
        </div>
    );
}
