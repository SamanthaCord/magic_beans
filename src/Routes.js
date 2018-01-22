import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Session from './components/Session';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component={ App } />
      <Route exact path="/session" component={ Session } />
    </div>
  </Router>
)

export default Routes;
