import React from 'react';
import Button from "../../Components/Button/Button";


const TeamSplitter = ({ handleSubmit, stage }) => (
   <>
      { stage !== 3 ? null :
      <div className="page-container">
         <h1> Ready? </h1>
         <Button className="btn-main" handleClick = { handleSubmit }>Split</Button>
      </div>
      }
      
   </>
);

export default TeamSplitter;