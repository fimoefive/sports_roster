import React from 'react';
import PropTypes from 'prop-types';
// import SinglePlayer from '../views/SinglePlayer';

function SinglePlayerCard({ children, player }) {
  return (
    <div>
      <h2>Player: {player.name}</h2>
      {children}
      <footer>&#169; 2021</footer>
    </div>
  );
}

SinglePlayerCard.propTypes = {
  children: PropTypes.any,
  player: PropTypes.object
};

export default SinglePlayerCard;
