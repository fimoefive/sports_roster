import React from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardImg,
  CardText,
  CardTitle
} from 'reactstrap';
// import { deletePlayer } from '../helpers/data/playerData';
// import PlayerForm from './PlayerForm';

const PlayerCard = ({
  imageUrl,
  name,
  position,
  handleClick
}) => {
  <CardBody>
    <CardImg>{imageUrl}</CardImg>
    <CardTitle tag="h5">{name}</CardTitle>
    <CardText>Position: {position}</CardText>
    {handleClick ? <Button onClick={handleClick}>Print Player</Button> : ''}
  </CardBody>;
};

PlayerCard.PropTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

export default PlayerCard;
