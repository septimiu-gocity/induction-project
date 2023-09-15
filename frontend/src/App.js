import { useEffect, useState } from "react";
import "./App.css";
import AddNewRecipeForm from "./components/AddNewRecipeForm";
import Recipes from "./components/Recipes";
import Button from "./components/Button";

function App() {
    const [recipes, setRecipes] = useState([
        {
            id: 1,
            title: "Shakshuka",
            ingredients: ["eggs", "tomato paste", "red bell pepper", "onion"],
            prepSteps: [
                "Dice the onion and ...",
                "Add smoked paprika, cumin, ... to the onion",
                "Add tomato sauce and turn heat to medium...",
            ],
        },
        {
            id: 2,
            title: "Beef Burger",
            ingredients: [
                "burger buns",
                "ground beef",
                "1 small onion",
                "mature cheddar cheese (slices)",
                "burger sauce",
            ],
            prepSteps: [
                "Preheat the pan to a high temp",
                "Turn the ground beef into small beef balls (around 120g each)",
                "Pour a bit of veg oil into the pan and press the meatball down into the pan until around 1cm thick...",
            ],
        },
    ]);
    const [isAddingNewRecipe, setIsAddingNewRecipe] = useState(false);

    const saveEditedRecipe = (editedRecipe) => {
        const editedRecipes = [...recipes];
        const indexOfEditedRecipe = editedRecipes.findIndex((recipe) => recipe.id === editedRecipe.id)
        editedRecipes[indexOfEditedRecipe] = editedRecipe;
        setRecipes([...editedRecipes]);
    };

    const deleteRecipe = (recipeId) => {
        console.log(recipeId);
        setRecipes(recipes.filter((recipe) => recipe.id !== recipeId))
    }

    useEffect(() => {
        console.log(recipes);
    }, [recipes]);

    const handleAddRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
    };

    return (
        <div className="container">
            <header>Recipe Book</header>
            <div id="recipe-tab">
                <Button
                    text="+"
                    className={`btn-plus ${isAddingNewRecipe ? "btn-adding" : ""}`}
                    onClick={() => {
                        setIsAddingNewRecipe(!isAddingNewRecipe);
                    }}
                />
                {isAddingNewRecipe ? <h3>Discard Recipe</h3> : <h3>Add New Recipe</h3>}
            </div>
            {isAddingNewRecipe && <AddNewRecipeForm onSubmit={handleAddRecipe} />}
            <Recipes recipes={recipes} saveEditedRecipe={saveEditedRecipe} deleteRecipe={deleteRecipe}></Recipes>
        </div>
    );
}

export default App;
