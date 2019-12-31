import React from "react";

const Button = ({ 
    handleClick,
    children,
    disabled,
    className
}) => (
  <div className={ className }>
    <button 
     onClick={ handleClick }
     disabled={ disabled ? true : null}
     
    >{ children }</button> 
  </div>
);

export default Button;