import React from "react";
import TeamCounter from "../Counter/TeamCounter";
import InputPlayerGroup from "../InputPlayerGroup";
import TeamSplitter from "../TeamSplitter";
import TeamCards from "../TeamCards";



const Application = ({ stage }) => (
    <> { stage === 0 ? null : 
        <div className="background-1 flex-col-centre">
            <div className="bg-circle-2 outer"></div>
            <div className="bg-circle-3 inner"></div>
            <TeamCounter max={ 9 } min={ 2 }>Number of Teams</TeamCounter> 
            <InputPlayerGroup/>
            <TeamSplitter />
            <TeamCards/>
            <div className="bg-circle-4 outer"></div>
            <div className="bg-circle-5 inner "></div>
        </div>
    }
    </>
    
);

export default Application;