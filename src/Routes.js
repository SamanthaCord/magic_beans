import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Session from './components/Session';
import Steps from './components/Steps';
import One from './components/One';

const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route exact path="/session" component={ Session } />
      <Route exact path="/steps" component={ Steps } />
      <Route exact path="/one" component={ One } />
    </div>
  </Router>
)

export default Routes;
