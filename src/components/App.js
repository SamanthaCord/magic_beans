import React, { Component } from 'react';
import Home from './Home';
import Session from './Session';
import Steps from './Steps';

import '../index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSession: false,
      showHome: true,
      pageCount: 0
    };
    this._session = this._session.bind(this);
    this._steps = this._steps.bind(this);
  }

  _session() {
    this.setState({showSession: true});
    this.setState({showHome: false});
  }

  _steps() {
    this.setState({pageCount: 2});
  }

  render() {
    return (
      <div>
        {this.state.showSession ? <Session /> : null}
        {this.state.pageCount === 2 ? <Steps />: <Home show={() => this._session()} count={() => this._steps()} />}
        <Steps />
      </div>
    );
  }
}

export default App;
