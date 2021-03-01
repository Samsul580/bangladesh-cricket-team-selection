import React from 'react';
import './Player.css';
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
            <button onClick={() => addPlayer(props.player)}>Add Player</button>
        </div>
    );
};

export default Player;