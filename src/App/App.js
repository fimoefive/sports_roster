import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
import { getPlayers } from '../helpers/data/playerData';
import Routes from '../helpers/Routes';
import './App.scss';

firebase.initializeApp(firebaseConfig);

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   getPlayers().then(setPlayers);
  // }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
        getPlayers(userInfoObj).then((resp) => setPlayers(resp));
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {/* <div className='App'> */}
      <h2>Basketball Roster</h2>
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
          players={players}
          setPlayers={setPlayers}
        />
      </Router>
    </>
  );
}

export default App;
