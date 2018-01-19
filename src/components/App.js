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
      stepOne: false,
      identity: []
    };
    this._session = this._session.bind(this);
    this._steps = this._steps.bind(this);
    this._firstStep = this._firstStep.bind(this);
    this._saveItem = this._saveItem.bind(this);
  }
  componentDidMount() {
    if(localStorage.getItem('stepone')){
      this.setState({identity: JSON.parse(localStorage.getItem('stepone'))})
    }
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

  _saveInput(e) {
    const update = this.state.identity.slice()

    this.setState({identity: [...update, e]}, function() {
      localStorage['stepone'] = JSON.stringify(this.state.identity);
    })
    console.log(e);
  }

  _deleteItem(i) {
    const update = this.state.identity.slice()
    update.splice( this.state.identity.indexOf(i), 1 )
    this.setState({
      identity: update
    }, function() {
      localStorage['stepone'] = JSON.stringify(this.state.identity);
    })
  }

  _saveItem(e) {
    const update = this.state.identity.slice()

    this.setState({identity: [...update, e]}, function() {
      localStorage['stepone'] = JSON.stringify(this.state.identity);
    })
    console.log(e);
  }

  render() {
    return (
      <div>
        {this.state.showSession ? <Session hide={() => this._steps()} /> : null}
        {this.state.pageCount === 2 ? <Steps showOne={() => this._firstStep()}/> : null}
        {this.state.showHome ? <Home show={() => this._session()} /> : null}
        {this.state.stepOne ? <One addItem={(e) => this._saveItem(e)} value={(e) => this._saveInput(e)} identity={this.state.identity} remove={(i) => this._deleteItem(i)} /> : null}
      </div>
    );
  }
}

export default App;
  // localStorage.setItem('stepone', this.state.identity.join(" ") + " " + e)
