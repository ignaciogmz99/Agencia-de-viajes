import React from "react";
import "./Button.css";

const Button = ({
    text, 
    variant = "primary",
    size = "medium",
    onClick
}) => {
    return (
        <button
        className={'btn btn-${variant} btn-${size}'}
        onClick={onClick}
        >
        {text}
        </button>
    );
};

export default Button;