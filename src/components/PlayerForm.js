import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import { addPlayer, updatePlayer } from '../helpers/data/playerData';

const PlayerForm = ({
  formTitle,
  setPlayers,
  imageUrl,
  name,
  position,
  firebaseKey,
  user,
  uid,
}) => {
  const [player, setPlayer] = useState({
    imageUrl: imageUrl || '',
    name: name || '',
    position: position || '',
    firebaseKey: firebaseKey || null,
    uid: uid || user.uid
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      // e.target.name === 'position' ? (e.target.value) : e.target.value,
    }));
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      // makes a call to update player and renders to the dom
      // Long Hand
      updatePlayer(player, user).then((playerArray) => setPlayers(playerArray));
      // Short Hand
      // updatePlayer(player, user).then(setPlayers);
    } else {
      // add a player to firebase
      // Long Hand
      // addPlayer(player).then((playerArray) => setPlayers(playerArray));
      // Short Hand
      addPlayer(player, user).then((response) => {
        setPlayers(response);
        history.push('/players');
      });

      // Clears Input fields
      setPlayer({
        imageUrl: '',
        name: '',
        position: '',
        firebaseKey: null
      });
    }
  };

  return (
    <div className='player-form'>
      <Form
        id='addPlayerForm'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="imageUrl">Picture: </Label>
          <Input
            name='imageUrl'
            id='imageUrl'
            value={player.imageUrl}
            type='text'
            placeholder='Enter a Picture URL'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="name">Name: </Label>
          <Input
            name='name'
            id='name'
            value={player.name}
            type='text'
            placeholder='Enter a Player Name'
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Position: </Label>
          <Input
            name='position'
            id='position'
            value={player.position}
            type='text'
            placeholder='Enter a Player Position'
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

PlayerForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setPlayers: PropTypes.func,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default PlayerForm;
