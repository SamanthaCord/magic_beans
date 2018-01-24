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
      closedSession: false,
      msg: 0
    };

    this._session = this._session.bind(this);
    this._steps = this._steps.bind(this);
    this._showSteps = this._showSteps.bind(this);

    this._firstStep = this._firstStep.bind(this);
    this._saveItem = this._saveItem.bind(this);
    this._deleteItem = this._deleteItem.bind(this);

    this._secondStep = this._secondStep.bind(this);
    this._deleteItem2 = this._deleteItem2.bind(this);

    this._thirdStep = this._thirdStep.bind(this);
    this._deleteItem3 = this._deleteItem3.bind(this);

    this._fourthStep = this._fourthStep.bind(this);
    this._deleteItem4 = this._deleteItem4.bind(this);

    this._fifthStep = this._fifthStep.bind(this);
    this._deleteItem5 = this._deleteItem5.bind(this);

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

  _deleteItem(i) {
    const update = this.state.identity.slice()
    update.splice( this.state.identity.indexOf(i), 1 )
    this.setState({
      identity: update
    }, function() {
      localStorage['stepone'] = JSON.stringify(this.state.identity);
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

  _deleteItem3(i) {
    const update = this.state.tov.slice()
    update.splice( this.state.tov.indexOf(i), 1)
    this.setState({
      tov: update
    }, function() {
      localStorage['stepthree'] = JSON.stringify(this.state.tov);
    })
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

  _deleteItem4(i) {
    const update = this.state.pod.slice()
    update.splice( this.state.pod.indexOf(i), 1)
    this.setState({
      pod: update
    }, function() {
      localStorage['stepfour'] = JSON.stringify(this.state.pod);
    })
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

  _deleteItem5(i) {
    const update = this.state.names.slice()
    update.splice( this.state.names.indexOf(i), 1)
    this.setState({
      names: update
    }, function() {
      localStorage['stepfive'] = JSON.stringify(this.state.names);
    })
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

        {this.state.stepOne ? <One identity={this.state.identity} addItem={(e) => this._saveItem(e, 1)} remove={(i) => this._deleteItem(i)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepTwo ? <Two audience={this.state.audience} addItem={(e) => this._saveItem(e, 2)} remove={(i) => this._deleteItem2(i)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepThree ? <Three tov={this.state.tov} addItem={(e) => this._saveItem(e, 3)} remove={(i) => this._deleteItem3(i)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepFour ? <Four pod={this.state.pod} addItem={(e) => this._saveItem(e, 4)} remove={(i) => this._deleteItem4(i)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

        {this.state.stepFive ? <Five names={this.state.names} addItem={(e) => this._saveItem(e, 5)} remove={(i) => this._deleteItem5(i)} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreenOpen={this._exitPopUp} /> : null}

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
