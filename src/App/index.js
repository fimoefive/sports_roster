import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getPlayers } from '../helpers/data/playerData';
import Routes from '../helpers/Routes';
// import PlayerCard from '../components/PlayerCard';
// import PlayerForm from '../components/PlayerForm';

import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  return (
    <>
      {/* <div className='App'> */}
      <h2>Basketball Roster</h2>
      <Router>
        <NavBar />
        <Routes
          players={players}
          setPlayers={setPlayers}
        />
      </Router>
    </>
  );
}

export default App;
