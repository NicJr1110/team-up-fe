import React from "react";
import InputPlayer from "../InputPlayer";
import PlayerList from "../PlayerList";
import Button from "../Button/Button";

// parent component for the Player Input stage, as it is built with a number of other reuabsle components
const InputPlayerGroup = ({ totalTeams, players, stage, handleClick }) => (
    <React.Fragment>
        { stage !== 2 ? null :
        <div className="page-container">
            <div className="page-content">
                <h1>Add Players</h1>
            
                <InputPlayer/>
                <PlayerList/>
            </div>
            <Button 
                disabled={ players.length < totalTeams ? true : false}
                handleClick={ handleClick }
                className="btn btn-main"
            >Next</Button> 
        </div>
        }
    </React.Fragment>  
);

export default InputPlayerGroup