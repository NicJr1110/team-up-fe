import React from "react";
import InputPlayer from "../InputPlayer";
import PlayerList from "../PlayerList";
import Button from "../Button/Button";

const InputPlayerGroup = ({ totalTeams, players, stage, handleClick }) => (
    <>
        { stage !== 2 ? null :
        <div className="page-container">
            <h2 class="stage-title">Add Players</h2>
            <InputPlayer/>
            <PlayerList/>
            <Button 
                disabled={ players.length < totalTeams ? true : false}
                handleClick={ handleClick }
                className="btn btn-main"
            >Next</Button> 
        </div>
        }
    </>
    
);

export default InputPlayerGroup