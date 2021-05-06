import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getSinglePlayer } from '../helpers/data/playerData';

function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { id } = useParams;

  useEffect(() => {
    getSinglePlayer(id).then(setPlayer);
  }, []);

  return (
    <div>
      {player.name}
    </div>
  );
}

SinglePlayer.PropTypes = {
  id: PropTypes.string
};

export default SinglePlayer;
