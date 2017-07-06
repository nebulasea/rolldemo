import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Main from '../pages/MainInit.js';
import DiceRoller from '../pages/DiceRoller.js';
import DiceOutput from '../pages/DiceOutput.js';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={DiceRoller}/>
      <Route path="DiceOutput" component={DiceOutput}/>
    </Route>
  </Router>
)