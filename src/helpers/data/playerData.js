import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = (user) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json?orderBy="uid"&equalTo="${user.uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addPlayer = (player, user) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/players.json`, player)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/players/${response.data.name}.json`, body)
        .then(() => {
          getPlayers(user).then((playersArray) => resolve(playersArray));
        });
    }).catch((error) => reject(error));
});

const deletePlayer = (firebaseKey, user) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/players/${firebaseKey}.json`)
    .then(() => getPlayers(user).then((playerArray) => resolve(playerArray)))
    .catch((error) => reject(error));
});

const updatePlayer = (player, user) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/players/${player.firebaseKey}.json`, player)
    .then(() => getPlayers(user).then(resolve))
    .catch((error) => reject(error));
});

const getSinglePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getPlayers, addPlayer,
  deletePlayer, updatePlayer,
  getSinglePlayer
};
