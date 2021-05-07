import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getPlayers } from '../helpers/data/playerData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then(setPlayers);
  }, []);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed) {
  //       const userInfoObj = {
  //         fullName: authed.displayName,
  //         profileImage: authed.photoURL,
  //         uid: authed.uid,
  //         username: authed.email.split('@')[0]
  //       };
  //       setUser(userInfoObj);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  // }, []);

  return (
    <>
      {/* <div className='App'> */}
      <h2>Basketball Roster</h2>
      <NavBar />
      <Routes
        players={players}
        setPlayers={setPlayers}
      />
    </>
  );
}

export default App;
