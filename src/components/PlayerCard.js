import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from 'reactstrap';
import { deletePlayer } from '../helpers/data/playerData';
import PlayerForm from './PlayerForm';

const PlayerCard = ({ setPlayers, ...player }) => {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(player.firebaseKey)
          .then((playerArray) => setPlayers(playerArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <CardBody>
      <CardImg>{player.imageUrl}</CardImg>
      <CardTitle tag="h5">{player.name}</CardTitle>
      <CardText>Position: {player.position}</CardText>
      {/* {handleClick ? <Button onClick={handleClick}>Delete Player</Button> : ''} */}
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Player</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'CloseForm' : 'Edit Player'}
      </Button>
      {
        editing && <PlayerForm
          formTitle='Edit Player'
          setPlayers={setPlayers}
          {...player}
        />
      }
    </CardBody>
  );
};

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setPlayers: PropTypes.func
};

export default PlayerCard;
