import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, text, variant }) => {
  return (
    <div>
      <button className={classes.button} type={type} variant={variant}>
        {text}
      </button>
    </div>
  );
};

export default Button;
