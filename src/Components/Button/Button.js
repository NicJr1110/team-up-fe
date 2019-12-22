import React from "react";

const Button = ({
  handleIncrement,
  handleDecrement,
  handleReset,
}) => (
  <div>
    <button
      onClick={ handleIncrement }
    >+</button>

    <button
      onClick={ handleDecrement }
    >-</button>

    <button
      onClick={ handleReset }
    >Reset</button>
  </div>
);

export default Button;