import React from "react";

export default function Button({ text, className, onClick, type }) {
    return (
        <button className={`btn ${className}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
}
