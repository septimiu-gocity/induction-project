import React, { useState } from "react";
import Description from "./Description";
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai";
import EditButton from "./EditButton";

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
                <div className="edit-tab">
                    <h2 className="ing-subtitle">{recipe.title}</h2>
                    {isOpen && <EditButton />}
                </div>
                {!isOpen && <AiFillCaretRight />}
                {isOpen && <AiFillCaretDown />}
            </div>

            {isOpen && <Description ingredients={recipe.ingredients} prepSteps={recipe.prepSteps} />}
        </div>
    );
}
