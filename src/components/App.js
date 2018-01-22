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
      audience: [],
      tov: [],
      pod: [],
      names: [],
      sessionPreview: false,
      exitPopUp: false
    };

    this._session = this._session.bind(this);
    this._steps = this._steps.bind(this);
    this._showSteps = this._showSteps.bind(this);

    this._firstStep = this._firstStep.bind(this);
    this._saveItem = this._saveItem.bind(this);
    this._saveInput = this._saveInput.bind(this);
    this._deleteItem = this._deleteItem.bind(this);

    this._saveInput2 = this._saveInput2.bind(this);
    this._secondStep = this._secondStep.bind(this);
    this._saveItem2 = this._saveItem2.bind(this);
    this._deleteItem2 = this._deleteItem2.bind(this);

    this._thirdStep = this._thirdStep.bind(this);
    this._saveInput3 = this._saveInput3.bind(this);
    this._deleteItem3 = this._deleteItem3.bind(this);
    this._saveItem3 = this._saveItem3.bind(this);

    this._fourthStep = this._fourthStep.bind(this);
    this._saveInput4 = this._saveInput4.bind(this);
    this._deleteItem4 = this._deleteItem4.bind(this);
    this._saveItem4 = this._saveItem4.bind(this);

    this._fifthStep = this._fifthStep.bind(this);
    this._saveInput5 = this._saveInput5.bind(this);
    this._deleteItem5 = this._deleteItem5.bind(this);
    this._saveItem5 = this._saveItem5.bind(this);

    this._showPreview = this._showPreview.bind(this);
    this._exitPopUp = this._exitPopUp.bind(this);
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

  _session() {
    this.setState({showSession: true});
    this.setState({showHome: false});
  }

  _steps() {
    this.setState({pageCount: 2});
    this.setState({showSession: false});
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
      sessionPreview: false
    });
    console.log(this.state.pageCount);
  }

  _firstStep() {
    this.setState({stepOne: true});
    this.setState({showSession: false});
    this.setState({pageCount: 1});
    this.setState({showHome: false});
    this.setState({sessionPreview: false});
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
    this.setState({sessionPreview: false});
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
    this.setState({sessionPreview: false});
    console.log("working on opening step 3");
  }

  _saveInput3(e) {
    const update = this.state.tov.slice()
    this.setState({tov: [...update, e]}, function() {
      localStorage['stepthree'] = JSON.stringify(this.state.tov);
    })
    console.log(e);
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

  _saveItem3(e) {
    const update = this.state.tov.slice()

    this.setState({tov: [...update, e]}, function() {
      localStorage['stepthree'] = JSON.stringify(this.state.tov);
    })
    console.log(e);
  }

  _fourthStep() {
    this.setState({stepFour: true});
    this.setState({stepThree: false});
    this.setState({stepTwo: false});
    this.setState({stepOne: false});
    this.setState({showSession: false});
    this.setState({pageCount: 1});
    this.setState({showHome: false});
    this.setState({sessionPreview: false});
    console.log("working on opening step 3");
  }

  _saveInput4(e) {
    const update = this.state.pod.slice()
    this.setState({pod: [...update, e]}, function() {
      localStorage['stepfour'] = JSON.stringify(this.state.pod);
    })
    console.log(e);
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

  _saveItem4(e) {
    const update = this.state.pod.slice()

    this.setState({pod: [...update, e]}, function() {
      localStorage['stepfour'] = JSON.stringify(this.state.pod);
    })
    console.log(e);
  }

  _fifthStep() {
    this.setState({stepFive: true});
    this.setState({stepFour: false});
    this.setState({stepThree: false});
    this.setState({stepTwo: false});
    this.setState({stepOne: false});
    this.setState({showSession: false});
    this.setState({pageCount: 1});
    this.setState({showHome: false});
    this.setState({sessionPreview: false});
    console.log("working on opening step 5");
  }

  _saveInput5(e) {
    const update = this.state.names.slice()
    this.setState({names: [...update, e]}, function() {
      localStorage['stepfive'] = JSON.stringify(this.state.names);
    })
    console.log(e);
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

  _saveItem5(e) {
    const update = this.state.names.slice()

    this.setState({names: [...update, e]}, function() {
      localStorage['stepfive'] = JSON.stringify(this.state.names);
    })
    console.log(e);
  }

  _showPreview() {
    this.setState({sessionPreview: true});
    this.setState({stepFive: false});
    this.setState({stepFour: false});
    this.setState({stepThree: false});
    this.setState({stepTwo: false});
    this.setState({stepOne: false});
    this.setState({showSession: false});
    this.setState({pageCount: 1});
    this.setState({showHome: false});
    console.log("opening your PDF preview");
  }

  _exitPopUp() {
    this.setState({exitPopUp: true});
    this.setState({showHome: false});
    this.setState({showSession: false});
    console.log("open exit screen");
  }

  render() {
    return (
      <div>
        {this.state.showSession ? <Session hide={() => this._steps()} /> : null}

        {this.state.pageCount === 2 ? <Steps showOne={() => this._firstStep()} showTwo={() => this._secondStep()} showThree={() => this._thirdStep()} showFour={() => this._fourthStep()} showFive={() => this._fifthStep()} backToSteps={this._showSteps} showPreview={this._showPreview} exitScreen={this._exitPopUp} /> : null}

        {this.state.showHome ? <Home show={() => this._session()} /> : null}

        {this.state.stepOne ? <One value={(e) => this._saveInput(e)} identity={this.state.identity} addItem={(e) => this._saveItem(e)} remove={(i) => this._deleteItem(i)} backToSteps={this._showSteps} showPreview={this._showPreview} /> : null}

        {this.state.stepTwo ? <Two value={(e) => this._saveInput2(e)} audience={this.state.audience} addItem={(e) => this._saveItem2(e)} remove={(i) => this._deleteItem2(i)} backToSteps={this._showSteps} showPreview={this._showPreview} /> : null}

        {this.state.stepThree ? <Three value={(e) => this._saveInput3(e)} tov={this.state.tov} addItem={(e) => this._saveItem3(e)} remove={(i) => this._deleteItem3(i)} backToSteps={this._showSteps} showPreview={this._showPreview} /> : null}

        {this.state.stepFour ? <Four value={(e) => this._saveInput4(e)} pod={this.state.pod} addItem={(e) => this._saveItem4(e)} remove={(i) => this._deleteItem4(i)} backToSteps={this._showSteps} showPreview={this._showPreview} /> : null}

        {this.state.stepFive ? <Five value={(e) => this._saveInput5(e)} names={this.state.names} addItem={(e) => this._saveItem5(e)} remove={(i) => this._deleteItem5(i)} backToSteps={this._showSteps} showPreview={this._showPreview} /> : null}

        {this.state.sessionPreview ? <Preview identity={this.state.identity} audience={this.state.audience} tov={this.state.tov} pod={this.state.pod} names={this.state.names} backToSteps={this._showSteps} /> : null}

        {this.state.exitPopUp ? <ExitPopUp /> : null}
      </div>
    );
  }
}

export default App;

// printDocument() {
// const input = document.getElementById('divToPrint');
// html2canvas(input).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     pdf.addImage(imgData, 'JPEG', 0, 0);
//     // pdf.output('dataurlnewwindow');
//     pdf.save("download.pdf");
//   });
// }
