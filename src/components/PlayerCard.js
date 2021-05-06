import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import { deletePlayer } from '../helpers/data/playerData';
import PlayerForm from './PlayerForm';

const PlayerCard = ({
  firebaseKey,
  imageUrl,
  name,
  position,
  setPlayers
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey)
          .then(setPlayers);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  function viewPlayer() {
    history.push('/player/$(firebaseKey)');
  }

  return (
    <CardBody>
      <img src={imageUrl} />
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Position: {position}</CardText>
      {/* {handleClick ? <Button onClick={handleClick}>Delete Player</Button> : ''} */}
      <Button color="warning" onClick={viewPlayer}>View Player</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Player</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'CloseForm' : 'Edit Player'}
      </Button>
      {
        editing && <PlayerForm
          formTitle='Edit Player'
          setPlayers={setPlayers}
          firebaseKey={firebaseKey}
          imageUrl={imageUrl}
          name={name}
          position={position}
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
