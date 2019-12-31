import React from "react";
import Button from "../Button/Button";

const Landing = ({ handleClick,stage }) => (
    <>
        { stage !== 0 ? null :
        <div className="background-1">
            <div className="bg-circle"></div>
            <div className="flex-col-centre title">
                <h1> TEAM UP</h1>
                <p>Lorem ipsum</p>
            </div>
           
            <Button className="btn btn-main start flex-col-centre" handleClick={ handleClick }> Start </Button>
            
        </div >
        }
    </>
    
);
export default Landing