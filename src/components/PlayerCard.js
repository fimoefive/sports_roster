import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  CardBody,
  CardImg,
  CardText,
  imageUrl,
  CardTitle
} from 'reactstrap';
// import { deleteStudent } from '../helpers/data/playerData';
// import PlayerForm from './PlayerForm';

const PlayerCard = ({
  imageUrl,
  name,
  position,
  handleClick
}) => {
  <CardBody>
    <CardTitle tag="h5">{name}</CardTitle>
    <CardImg>{imageUrl}</CardImg>
    <CardText>Position: {position}</CardText>
    {handleClick ? <Button onClick={handleClick}>Print Student</Button> : ''}
  </CardBody>

}
}
