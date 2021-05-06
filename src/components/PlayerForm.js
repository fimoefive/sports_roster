import React, { useState } from 'react';
// import {
//   Button, Form, FormGroup, Label, Input
// } from 'reactstrap';
import PropTypes from 'prop-types';
import { addPlayer, updatePlayer } from '../helpers/data/playerData';

const PlayerForm = ({ formTitle, setPlayers, ...args }) => {
  const [player, setPlayer] = useState({
    firebaseKey: args?.firebaseKey || null,
    imageUrl: args?.imageUrl || '',
    name: args?.name || '',
    position: args.position || ''
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === 'position' ? (e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      // updates and renders to the dom
      updatePlayer(player).then((playerArray) => setPlayers(playerArray));
    } else {
      // add a player to firebase
      addPlayer(player).then((playerArray) => setPlayers(playerArray));
    }
  };

  return (
    <div className='student-form'>
      <form
        id='addStudentForm'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <div>
          <label>Picture: </label>
          <input
            name='imageUrl'
            value={player.imageUrl}
            type='text'
            placeholder='Enter a Picture URL'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Name: </label>
          <input
            name='name'
            value={player.name}
            type='text'
            placeholder='Enter a Player Name'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Position: </label>
          <input
            name='position'
            value={player.position}
            type='text'
            placeholder='Enter a Player Position'
            onChange={handleInputChange}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
};

export default PlayerForm;
