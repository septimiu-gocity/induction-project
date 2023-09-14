import React, { useState } from "react";
import Description from "./Description";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";

export default function Recipe({ recipe }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            id="recipe-wrapper"
            onClick={() => {
                setIsOpen(!isOpen);
            }}
        >
            <div id="recipe-title-wrapper">
                <h2>{recipe.title}</h2>
                {!isOpen && <AiFillCaretRight />}
                {isOpen && <AiFillCaretDown />}
            </div>

            {isOpen && <Description ingredients={recipe.ingredients} prepSteps={recipe.prepSteps} />}
        </div>
    );
}
