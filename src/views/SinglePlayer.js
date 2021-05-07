import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSinglePlayer } from '../helpers/data/playerData';

function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setPlayer);
  }, []);

  return (
    <div>
      {player.name}
    </div>
  );
}

SinglePlayer.PropTypes = {
  firebaseKey: PropTypes.string
};

export default SinglePlayer;
