import React from "react";

const Button = props => {
  return (
    <button
      {...props}
      className={
        props.theme === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
    >
      {props.title}
    </button>
  );
};

export default Button;

