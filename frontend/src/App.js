import { useEffect, useState } from "react";
import "./App.css";
import AddNewRecipeForm from "./components/AddNewRecipeForm";
import Recipes from "./components/Recipes";
import Button from "./components/Button";

const recipes = [
    {
        title: "Shakshuka",
        ingredients: ["eggs", "tomato paste", "red bell pepper", "onion"],
        prepSteps: [
            "Dice the onion and ...",
            "Add smoked paprika, cumin, ... to the onion",
            "Add tomato sauce and turn heat to medium...",
        ],
        image: "",
    },
    {
        title: "Beef Burger",
        ingredients: ["burger buns", "ground beef", "1 small onion", "mature cheddar cheese (slices)", "burger sauce"],
        prepSteps: [
            "Preheat the pan to a high temp",
            "Turn the ground beef into small beef balls (around 120g each)",
            "Pour a bit of veg oil into the pan and press the meatball down into the pan until around 1cm thick...",
        ],
        image: "",
    },
];

function App() {
    const [isAddingNewRecipe, setIsAddingNewRecipe] = useState(false);

    useEffect(() => {
        console.log(isAddingNewRecipe);
    }, [isAddingNewRecipe]);

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
                <h3>Add New Recipe</h3>
            </div>
            {isAddingNewRecipe && <AddNewRecipeForm />}
            <Recipes recipes={recipes}></Recipes>
        </div>
    );
}

export default App;
