import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddPlayer from '../views/AddPlayer';
import Home from '../views/Home';
import Players from '../views/Players';

function Routes({ players, setPlayers }) {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/players'
            component={() => <Players players={players} setPlayers={setPlayers} />}
          />
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
};

export default Routes;
