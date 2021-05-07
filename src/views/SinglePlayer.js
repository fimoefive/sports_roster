import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SinglePlayerCard from '../components/SinglePlayerCard';
import { getSinglePlayer } from '../helpers/data/playerData';

function SinglePlayer() {
  const [player, setPlayer] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSinglePlayer(firebaseKey).then(setPlayer);
  }, []);

  return (
    <div>
      <SinglePlayerCard player={player}>
        <h2>{player.imageUrl}</h2>
        <h2>{player.name}</h2>
        <h2>{player.position}</h2>
      </SinglePlayerCard>
    </div>
  );
}

export default SinglePlayer;
