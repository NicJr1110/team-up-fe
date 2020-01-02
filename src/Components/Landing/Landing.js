import React from "react";
import Button from "../Button/Button";

const Landing = ({ handleClick,stage }) => (
    <>
        { stage !== 0 ? null :
        <div >
            <div className="bg-circle"></div>
            <div className="flex-col-centre title">
                <h1> TEAM UP</h1>
                <p>Random Team Generator</p>
            </div>
           
            <Button className="btn btn-main start flex-col-centre" handleClick={ handleClick }>Let's Go!</Button>
            
        </div >
        }
    </>
    
);
export default Landing