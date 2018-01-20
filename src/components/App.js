import React, { Component } from 'react';
import Home from './Home';
import Session from './Session';
import Steps from './Steps';
import One from './One';
import Two from './Two';
import Three from './Three';

import '../index.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSession: false,
      showHome: true,
      pageCount: 0,
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      stepFour: false,
      stepFive: false,
      identity: [],
      audience: []
    };
    this._session = this._session.bind(this);
    this._steps = this._steps.bind(this);
    this._firstStep = this._firstStep.bind(this);
    this._saveItem = this._saveItem.bind(this);
    this._saveInput = this._saveInput.bind(this);
    this._deleteItem = this._deleteItem.bind(this);
    this._saveInput2 = this._saveInput2.bind(this);
    this._secondStep = this._secondStep.bind(this);
    this._saveItem2 = this._saveItem2.bind(this);
    this._deleteItem2 = this._deleteItem2.bind(this);
    this._thirdStep = this._thirdStep.bind(this);
  }
  componentDidMount() {
    if(localStorage.getItem('stepone')){
      this.setState({identity: JSON.parse(localStorage.getItem('stepone'))})
    }
    if(localStorage.getItem('steptwo')){
      this.setState({audience: JSON.parse(localStorage.getItem('steptwo'))})
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

  _saveInput2(e) {
    const update = this.state.audience.slice()
    this.setState({audience: [...update, e]}, function() {
      localStorage['steptwo'] = JSON.stringify(this.state.audience);
    })
    console.log(e);
  }

  _secondStep(e) {
    this.setState({stepTwo: true});
    this.setState({stepOne: false});
    this.setState({showSession: false});
    this.setState({pageCount: 1});
    this.setState({showHome: false});
    console.log("working on opening step 2");
  }

  _saveItem2(e) {
    const update = this.state.audience.slice()

    this.setState({audience: [...update, e]}, function() {
      localStorage['steptwo'] = JSON.stringify(this.state.audience);
    })
    console.log(e);
  }

  _deleteItem2(i) {
    const update = this.state.audience.slice()
    update.splice( this.state.audience.indexOf(i), 1)
    this.setState({
      audience: update
    }, function() {
      localStorage['steptwo'] = JSON.stringify(this.state.audience);
    })
  }

  _thirdStep() {
    this.setState({stepThree: true});
    this.setState({stepTwo: false});
    this.setState({stepOne: false});
    this.setState({showSession: false});
    this.setState({pageCount: 1});
    this.setState({showHome: false});
    console.log("working on opening step 3");
  }

  render() {
    return (
      <div>
        {this.state.showSession ? <Session hide={() => this._steps()} /> : null}

        {this.state.pageCount === 2 ? <Steps showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} /> : null}

        {this.state.showHome ? <Home show={() => this._session()} /> : null}

        {this.state.stepOne ? <One addItem={(e) => this._saveItem(e)} value={(e) => this._saveInput(e)} identity={this.state.identity} remove={(i) => this._deleteItem(i)} /> : null}

        {this.state.stepTwo ? <Two value={(e) => this._saveInput2(e)} addItem={(e) => this._saveItem2(e)} audience={this.state.audience} remove={(i) => this._deleteItem2(i)} /> : null}

        {this.state.stepThree ? <Three /> : null}
      </div>
    );
  }
}

export default App;
