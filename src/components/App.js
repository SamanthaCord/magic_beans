import React, { Component } from 'react';
import Home from './Home';
import Session from './Session';
import Steps from './Steps';
import One from './One';

import '../index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSession: false,
      showHome: true,
      pageCount: 0,
      stepOne: false
    };
    this._session = this._session.bind(this);
    this._steps = this._steps.bind(this);
    this._firstStep = this._firstStep.bind(this);
  }

  _session() {
    this.setState({showSession: true});
    this.setState({showHome: false});
  }

  _steps() {
    this.setState({pageCount: 2});
    console.log("page count increased to 2");
  }

  _firstStep() {
    this.setState({stepOne: true});
    this.setState({showSession: false});
    this.setState({pageCount: 1});
    this.setState({showHome: false});
    console.log("working on opening step 1");
  }

  render() {
    return (
      <div>
        {this.state.showSession ? <Session hide={() => this._steps()} /> : null}
        {this.state.pageCount === 2 ? <Steps showOne={() => this._firstStep()}/> : null}
        {this.state.showHome ? <Home show={() => this._session()} /> : null} 
        {this.state.stepOne ? <One /> : null}
      </div>
    );
  }
}

export default App;
