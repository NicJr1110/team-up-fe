import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button';

const TeamCards = ({ teams, stage, handleClick }) => (
    <React.Fragment>
        { stage !== 4 ? null :
        <div className="page-container">
            <Carousel className="scrolling-wrapper" touch={ true } interval={ 0 }>
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
            <Button className="btn btn-main" handleClick={ handleClick }>Restart</Button>
        </div>
        }
    </React.Fragment>
);

export default TeamCards;