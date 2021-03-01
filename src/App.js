import { useEffect, useState } from 'react';
import './App.css';
import Player from './components/Player/Player';
import Team from './components/Team/Team';

function App() {
    const [players, setPlayers] = useState([]);
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/0547450b')
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error(error))
    }, 0);
    const addPlayer = (player) => {
        const newCard = [...cards, player];
        setCards(newCard);
    }
    return (
        <div className="App">
            <h1>Select Team Member</h1>
            <div className="team-container">
                <div className="player">
                    {
                        players.map(player => <Player player={player} addPlayer={addPlayer} key={player._id}></Player>)
                    }
                </div>
                <div className="team">
                    <Team cards={cards} key={cards._id}></Team>
                </div>
            </div>



        </div>
    );
}

export default App;
