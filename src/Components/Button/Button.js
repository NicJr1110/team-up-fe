import React from "react";

const Button = ({ 
    handleClick,
    children 
}) => (
  <div>
    <button onClick={ handleClick }
    >{ children }</button>
  </div>
);

export default Button;