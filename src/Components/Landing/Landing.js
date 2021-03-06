import React from "react";
import Button from "../Button/Button";
import logo from "./team-up-logo.jpg";
const Landing = ({ handleClick,stage }) => (
    // this is the Landing/Homepage of the App and contains very different styling so kept separate
    <React.Fragment>
        { stage !== 0 ? null :
        <div className="landing-container">
            <div className="bg-circle"></div>
            <img src={logo} height="200"/>

            <div className="flex-col-centre title">
                <h1> TEAM UP</h1>
                <p>Random Team Generator</p>
            </div>
           
            <Button className="btn btn-main" handleClick={ handleClick }>Let's Go!</Button>
            
        </div >
        }
    </React.Fragment>
    
);
export default Landing