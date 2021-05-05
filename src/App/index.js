import React, { useState, useEffect } from 'react';
import PlayerCard from '../components/PlayerCard';
// import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from 'firebase/app';
import 'firebase/auth';
// import NavBar from '../components/NavBar';
import { getPlayers } from '../helpers/data/playerData';
import PlayerForm from '../components/PlayerForm';
// import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  return (
    <>
      <div className='App'>
        <h2>Basketball Roster</h2>
        <PlayerForm formTitle='Form Title' />
        <hr />
        {players.map((playerInfo) => (
          <PlayerCard
            key={playerInfo.firebaseKey}
            imageUrl={playerInfo.imageUrl}
            name={playerInfo.name}
            position={playerInfo.position}
            handleClick={() => console.warn(`${playerInfo.name} position is ${playerInfo.position}`)}
          ></PlayerCard>
        ))}
      </div>
    </>
  );
}

export default App;
