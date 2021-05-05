import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import firebase from 'firebase/app';
import 'firebase/auth';
// import NavBar from '../components/NavBar';
import { getPlayers } from '../helpers/data/playerData';
// import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((resp) => setPlayers(resp));
  }, []);

  return (
    <>
      <Player
        <div className='App'>
        <h2>Sports Roster</h2>
      </div>
    </>
  );
}

export default App;
