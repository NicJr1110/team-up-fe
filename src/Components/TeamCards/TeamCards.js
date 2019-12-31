import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const TeamCards = ({ teams, stage }) => (
    <>
        { stage !== 3 ? null :
        <Carousel className="scrolling-wrapper-flexbox" touch={ true } interval={ 0 }>
            {teams.map((team, i) => (
                <Carousel.Item className="card" key={ i }>
                    <h4>Team { i + 1}</h4>
                    <ul>
                    {team.map((player, i) => (
                        <li key={ i }> { player } </li>
                    ))}
                    </ul>
                </Carousel.Item>
            
            ))} 
        </Carousel>
        }
    </>
);

export default TeamCards;