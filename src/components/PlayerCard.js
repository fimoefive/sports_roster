import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import {
  Button,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer } from '../helpers/data/playerData';
import PlayerForm from './PlayerForm';

const PlayerCard = ({
  uid,
  user,
  firebaseKey,
  imageUrl,
  name,
  position,
  setPlayers
}) => {
  const [editing, setEditing] = useState(false);
  // const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey, user)
          .then(setPlayers);
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        // history.push(`/players/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <CardBody body className="card text-center" key={firebaseKey} id={uid}>
      <img src={imageUrl} />
      <CardTitle tag="h5">{name}</CardTitle>
      <CardText>Position: {position}</CardText>
      {/* {handleClick ? <Button onClick={handleClick}>Delete Player</Button> : ''} */}
      <Button color="warning" onClick={() => handleClick('view')}>View Player</Button>
      <Button color="danger" onClick={() => handleClick('delete')}>Delete Player</Button>
      <Button color="info" onClick={() => handleClick('edit')}>
        {editing ? 'CloseForm' : 'Edit Player'}
      </Button>
      {
        editing && <PlayerForm
          formTitle='Edit Player'
          uid={uid}
          user={user}
          firebaseKey={firebaseKey}
          imageUrl={imageUrl}
          name={name}
          position={position}
          setPlayers={setPlayers}
        />
      }
    </CardBody>
  );
};

PlayerCard.propTypes = {
  uid: PropTypes.string.isRequired,
  user: PropTypes.any,
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setPlayers: PropTypes.func
};

export default PlayerCard;
