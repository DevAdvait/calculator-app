import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <button className={`button ${props.className}`} onClick={props.handleClick} name={props.name}>
      {props.name}
    </button>
  );
};

export default Button;
