import React, { Component } from 'react';
import Home from './Home';
import Session from './Session';
import Steps from './Steps';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Preview from './Preview';
import ExitPopUp from './ExitPopUp';
import StepsNav from './StepsNav';
import SessionClosed from './SessionClosed';

import '../index.css';

const steps = {
  1: { storageKey: 'stepone', stateKey: 'identity' },
  2: { storageKey: 'steptwo', stateKey: 'audience' },
  3: { storageKey: 'stepthree', stateKey: 'tov' },
  4: { storageKey: 'stepfour', stateKey: 'pod' },
  5: { storageKey: 'stepfive', stateKey: 'names' }
}

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
      audience: [],
      tov: [],
      pod: [],
      names: [],
      sessionPreview: false,
      exitPopUp: false,
      closedSession: false
    };

    this._session = this._session.bind(this);
    this._steps = this._steps.bind(this);
    this._showSteps = this._showSteps.bind(this);

    this._firstStep = this._firstStep.bind(this);

    this._saveItem = this._saveItem.bind(this);
    this._deleteItem = this._deleteItem.bind(this);

    this._secondStep = this._secondStep.bind(this);
    this._thirdStep = this._thirdStep.bind(this);
    this._fourthStep = this._fourthStep.bind(this);
    this._fifthStep = this._fifthStep.bind(this);

    this._showPreview = this._showPreview.bind(this);
    this._exitPopUp = this._exitPopUp.bind(this);
    this._closePopUp = this._closePopUp.bind(this);
    this._endSession = this._endSession.bind(this);
  }

  componentDidMount() {
    if(localStorage.getItem('stepone')){
      this.setState({identity: JSON.parse(localStorage.getItem('stepone'))})
    }
    if(localStorage.getItem('steptwo')){
      this.setState({audience: JSON.parse(localStorage.getItem('steptwo'))})
    }
    if(localStorage.getItem('stepthree')){
      this.setState({tov: JSON.parse(localStorage.getItem('stepthree'))})
    }
    if(localStorage.getItem('stepfour')){
      this.setState({pod: JSON.parse(localStorage.getItem('stepfour'))})
    }
    if(localStorage.getItem('stepfive')){
      this.setState({names: JSON.parse(localStorage.getItem('stepfive'))})
    }
  }

  _home() {
    this.setState({
      showHome: true,
      closedSession: false
    });
  }

  _session() {
    this.setState({
      showSession: true,
      showHome: false
    });
  }

  _steps() {
    this.setState({
      pageCount: 2,
      showSession: false,
      showHome: false
    });
    console.log("page count increased to 2");
  }

  _showSteps() {
    this.setState({
      pageCount: 2,
      stepOne: false,
      stepTwo: false,
      stepThree: false,
      stepFour: false,
      stepFive: false,
      showSession: false,
      sessionPreview: false,
      showHome: false
    });
    console.log(this.state.pageCount);
  }

  _firstStep() {
    this.setState({
      stepOne: true,
      stepFive: false,
      stepFour: false,
      stepThree: false,
      stepTwo: false,
      showSession: false,
      showHome: false,
      sessionPreview: false
    });
    console.log("working on opening step 1");
  }

  _saveItem(item, step) {
    const keys = steps[step]
    const { storageKey, stateKey } = keys

    const stateItemToUpdate = this.state[stateKey]

    this.setState({[stateKey]: [...stateItemToUpdate, item]}, function() {
      const stateValue = JSON.stringify(this.state[stateKey]);
      localStorage.setItem(storageKey, stateValue);
    })
    console.log(item);
  }

  _deleteItem(item, step) {
    const keys = steps[step]
    const { storageKey, stateKey } = keys

    const stateItemToUpdate = this.state[stateKey]
    stateItemToUpdate.splice(this.state[stateKey].indexOf(item), 1)
    this.setState({[stateKey]: stateItemToUpdate}, function() {
      const stateValue = JSON.stringify(this.state[stateKey]);
      localStorage.setItem(storageKey, stateValue);
    })
  }

  _secondStep(e) {
    this.setState({
      stepTwo: true,
      stepFive: false,
      stepFour: false,
      stepThree: false,
      stepOne: false,
      showSession: false,
      showHome: false,
      sessionPreview: false
    });
    console.log("working on opening step 2");
  }

  _thirdStep() {
    this.setState({
      stepThree: true,
      stepFive: false,
      stepFour: false,
      stepTwo: false,
      stepOne: false,
      showSession: false,
      showHome: false,
      sessionPreview: false
    });
    console.log("working on opening step 3");
  }

  _fourthStep() {
    this.setState({
      stepFour: true,
      stepFive: false,
      stepThree: false,
      stepTwo: false,
      stepOne: false,
      showSession: false,
      showHome: false,
      sessionPreview: false
    });
    console.log("working on opening step 3");
  }

  _fifthStep() {
    this.setState({
      stepFive: true,
      stepFour: false,
      stepThree: false,
      stepTwo: false,
      stepOne: false,
      showSession: false,
      showHome: false,
      sessionPreview: false
    });
    console.log("working on opening step 5");
  }

  _showPreview() {
    this.setState({
      sessionPreview: true,
      stepFive: false,
      stepFour: false,
      stepThree: false,
      stepTwo: false,
      stepOne: false,
      showSession: false,
      pageCount: 1,
      showHome: false,
      exitPopUp: false
    });
    console.log("opening your PDF preview");
  }

  _exitPopUp() {
    this.setState({
      exitPopUp: true,
      showHome: false
    });
  }

  _closePopUp() {
    this.setState({exitPopUp:false});
    console.log("close exit screen");
  }

  _endSession() {
    localStorage.clear();
    this.setState({
      showHome: false,
      closedSession: true,
      sessionPreview: false,
      stepFive: false,
      stepFour: false,
      stepThree: false,
      stepTwo: false,
      stepOne: false,
      exitPopUp: false,
      pageCount: 1
    });
  }

  render() {
    return (
      <div>

        {this.state.showSession ? <Session hide={() => this._steps()} /> : null}

        {this.state.pageCount === 2 ? <Steps showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} showFour={() => this._fourthStep()} showFive={() => this._fifthStep()} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.showHome ? <Home show={() => this._session()} /> : null}

        {this.state.stepOne ? <One identity={this.state.identity} addItem={(e) => this._saveItem(e, 1)} remove={(item) => this._deleteItem(item, 1)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepTwo ? <Two audience={this.state.audience} addItem={(e) => this._saveItem(e, 2)} remove={(item) => this._deleteItem(item, 2)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepThree ? <Three tov={this.state.tov} addItem={(e) => this._saveItem(e, 3)} remove={(item) => this._deleteItem(item, 3)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepFour ? <Four pod={this.state.pod} addItem={(e) => this._saveItem(e, 4)} remove={(item) => this._deleteItem(item, 4)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepFive ? <Five names={this.state.names} addItem={(e) => this._saveItem(e, 5)} remove={(item) => this._deleteItem(item, 5)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.sessionPreview ? <Preview identity={this.state.identity} audience={this.state.audience} tov={this.state.tov} pod={this.state.pod} names={this.state.names} backToSteps={this._showSteps} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.exitPopUp ? <ExitPopUp endSession={this._endSession} seeSessionNotes={this._showPreview} exitScreenClose={this._closePopUp} /> : null}

        {this.state.stepOne ? <StepsNav showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} showFour={() => this._fourthStep()} showFive={() => this._fifthStep()} /> : null}

        {this.state.stepTwo ? <StepsNav showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} showFour={() => this._fourthStep()} showFive={() => this._fifthStep()} /> : null}

        {this.state.stepThree ? <StepsNav showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} showFour={() => this._fourthStep()} showFive={() => this._fifthStep()} /> : null}

        {this.state.stepFour ? <StepsNav showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} showFour={() => this._fourthStep()} showFive={() => this._fifthStep()} /> : null}

        {this.state.stepFive ? <StepsNav showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} showFour={() => this._fourthStep()} showFive={() => this._fifthStep()} /> : null}

        {this.state.closedSession ? <SessionClosed close={() => this._home()} /> : null}

      </div>

    );
  }
}

export default App;


// _deleteItem(i) {
//   const update = this.state.identity.slice()
//   update.splice( this.state.identity.indexOf(i), 1 )
//   this.setState({
//     identity: update
//   }, function() {
//     localStorage['stepone'] = JSON.stringify(this.state.identity);
//   })
// }
