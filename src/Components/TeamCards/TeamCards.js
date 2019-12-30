import React from 'react';

const TeamCards = ({ teams, stage }) => (
    <>
        { stage !== 3 ? null :
        <div>
            {teams.map((team, i) => (
                <div key={ i }>
                    <h4>Team { i + 1}</h4>
                    <ul>
                    {team.map((player, i) => (
                        <li key={ i }> { player } </li>
                    ))}
                    </ul>
                </div>
            
            ))} 
        </div>
        }
    </>
);

export default TeamCards;