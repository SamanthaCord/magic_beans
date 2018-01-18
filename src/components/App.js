import React, { Component } from 'react';
import Home from './Home';
import Session from './Session';


import '../index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSession: false,
      showHome: true
    };
    this._session = this._session.bind(this);
  }

  _session() {
    this.setState({showSession: true});
    this.setState({showHome: false});
  }

  render() {
    return (
      <div>
        {this.state.showSession ? <Session /> : null}
        {this.state.showHome ? <Home show={() => this._session()}/> : null}

      </div>
    );
  }
}

export default App;
