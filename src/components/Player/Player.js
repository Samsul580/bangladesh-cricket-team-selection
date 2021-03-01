import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    const {name, picture, team, salary, age} = props.player;
    const addPlayer = props.addPlayer;
    return (
        <div className="player-box">
            
            <img src={picture} alt=""/>
            <h2>{name}</h2>
            <h4>Team: {team}</h4>
            <h4>Salary: {salary}</h4>
            <h4>Age: {age}</h4>
            <button onClick={() => addPlayer(props.player)}><FontAwesomeIcon icon={faPlus} /> Add Player</button>
        </div>
    );
};

export default Player;