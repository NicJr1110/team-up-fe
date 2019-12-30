import React from "react";

const Button = ({ 
    handleClick,
    children,
    disabled
}) => (
  <div>
    <button 
     onClick={ handleClick }
     disabled={ disabled ? true : null}
    >{ children }</button> 
  </div>
);

export default Button;