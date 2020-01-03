import React from "react";

const Button = ({ 
    handleClick,
    children,
    disabled,
    className
}) => (
    <button 
     onClick={ handleClick }
     disabled={ disabled ? true : null}
     className= { className }
    >{ children }</button> 
);

export default Button;