import React from "react";
import Button from "../Button/Button";

const Landing = ({ handleClick,stage }) => (
    <>
        { stage !== 0 ? null :
        <>
            <h1> TEAM UP</h1>
            <p>Lorem ipsum</p>
            <Button handleClick={ handleClick }> Start </Button>
        </>
        }
    </>
    
);
export default Landing