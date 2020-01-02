import React from "react";
import InputPlayer from "../InputPlayer";
import PlayerList from "../PlayerList";
import Button from "../Button/Button";

const InputPlayerGroup = ({ totalTeams, players, stage, handleClick }) => (
    <>
        { stage !== 2 ? null :
        <>
            <h2>Add Players</h2>
            <InputPlayer/>
            <PlayerList/>
            <Button 
                disabled={ players.length < totalTeams ? true : false}
                handleClick={ handleClick }
            >Next</Button> 
        </>
        }
    </>
    
);

export default InputPlayerGroup