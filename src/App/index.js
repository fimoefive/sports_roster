import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from '../components/NavBar';
import { getStudents } from '../helpers/data/studentData';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [players, setPlayers] = useState([]);

  // const handleClick = (e) => {

  // };

  return (
    <>
      <div className='App'>
        <h2>Sports Roster</h2>
      </div>
    </>
  );
}

export default App;
