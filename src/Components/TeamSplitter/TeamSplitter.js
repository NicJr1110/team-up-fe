import React from 'react';
import Button from "../../Components/Button/Button";


const TeamSplitter = ({ handleSubmit, stage }) => (
   <>
      { stage !== 3 ? null :
         <Button handleClick = { handleSubmit }>Split</Button>
      }
   </>
);

export default TeamSplitter;