import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';
import Players from '../views/Players';
import SinglePlayer from '../views/SinglePlayer';

function Routes({ user, players, setPlayers }) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={() => <Home user={user} />} />
          <Route path='/players'
            component={() => <Players players={players} setPlayers={setPlayers} />}
          />
          <Route path='/player/:id' component={SinglePlayer} />
          <Route path='/add-player'
            component={() => <AddPlayer setPlayers={setPlayers} />}
          />
        </Switch>
      </div>
    </>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
