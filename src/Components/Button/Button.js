import React from "react";


const Button = ({ 
    handleClick,
    children,
    disabled,
    className,
    type
}) => (
    <button 
     onClick={ handleClick }
     disabled={ disabled ? true : null}
     className= { className }
     type= { type }
    >{ children }</button> 
);

export default Button;