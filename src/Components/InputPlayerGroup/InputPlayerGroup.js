import React from "react";
import InputPlayer from "../InputPlayer";
import PlayerList from "../PlayerList";
import Button from "../Button/Button";

const InputPlayerGroup = ({ stage, handleClick }) => (
    <>
        { stage !== 2 ? null :
        <>
            <InputPlayer/>
            <PlayerList/>
            <Button handleClick={ handleClick }>Next</Button>
        </>
        }
    </>
    
);

export default InputPlayerGroup