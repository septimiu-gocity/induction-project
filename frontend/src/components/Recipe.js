import React, { useEffect, useState } from "react";
import Description from "./Description";
import EditButton from "./EditButton";
import SaveButton from "./SaveButton";
import ButtonExpand from "./ButtonExpand";
import ButtonRetract from "./ButtonRetract";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function Recipe({ recipe, saveEditedRecipe, deleteRecipe }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedIngredients, setEditedIngredients] = useState(recipe.ingredients);
    const [editedPrepSteps, setEditedPrepSteps] = useState(recipe.prepSteps);

    const toggleEdit = () => {
        setIsEditing(true);
        setIsOpen(true);
    };

    const saveEditRecipe = () => {
        setIsEditing(false);
        saveEditedRecipe({
            id: recipe.id,
            title: recipe.title,
            ingredients: [...editedIngredients],
            prepSteps: [...editedPrepSteps],
        })
    };


    const getNewIngredients = (newIngredients) => {
        setEditedIngredients(newIngredients);
    };

    const getNewSteps = (newPrepSteps) => {
        setEditedPrepSteps(newPrepSteps);
    };

    return (
        <div id="recipe-wrapper">
            <div id="recipe-title-wrapper">
                <div className="edit-tab">
                    <h2 className="ing-subtitle">{recipe.title}</h2>
                    {isOpen && !isEditing && <EditButton toggleEdit={toggleEdit} />}
                    {isOpen && isEditing && <React.Fragment>
                        <SaveButton saveEditRecipe={saveEditRecipe} />
                        <DeleteRecipeButton deleteRecipe={deleteRecipe} recipeId={recipe.id}/>
                    </React.Fragment>}
                </div>
                {!isOpen && <ButtonExpand expandRecipe={() => setIsOpen(true)} />}
                {isOpen && <ButtonRetract retractRecipe={() => setIsOpen(false)} />}
            </div>

            {isOpen && (
                <Description
                    isEditing={isEditing}
                    recipeId={recipe.id}
                    ingredients={recipe.ingredients}
                    prepSteps={recipe.prepSteps}
                    getNewIngredients={getNewIngredients}
                    getNewSteps={getNewSteps}
                />
            )}
        </div>
    );
}
