import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Session from './components/Session';
import Steps from './components/Steps';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route exact path="/session" component={ Session } />
      <Route exact path="/steps" component={ Steps } />
    </div>
  </Router>
)

export default Routes;
