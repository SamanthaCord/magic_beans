import React, { PureComponent as Component } from 'react';
import App from './App';
import Session from './Session';


class Steps extends Component {
  constructor(props) {
    super(props);
    this._handleClickOne = this._handleClickOne.bind(this);
      this._handleClickTwo = this._handleClickTwo.bind(this);
      this._handleClickThree = this._handleClickThree.bind(this);
      this._handleClickFour = this._handleClickFour.bind(this);
      this._handleClickFive = this._handleClickFive.bind(this);
  }

  _handleClickOne () {
    console.log("open step 1");
    this.props.showOne()
  }

  _handleClickTwo () {
    console.log("open step 2");
  }

  _handleClickThree () {
    console.log("open step 3");
  }

  _handleClickFour () {
    console.log("open step 4");
  }

  _handleClickFive () {
    console.log("open step 5");
  }

  render () {
    return (
      <div id="wrapper">
        <div id="buttonContainer">
          <button onClick={this._handleClickOne} id="one">1</button>
          <button onClick={this._handleClickTwo} id="two">2</button>
          <button onClick={this._handleClickThree} id="three">3</button>
          <button onClick={this._handleClickFour} id="four">4</button>
          <button onClick={this._handleClickFive} id="five">5</button>
        </div>
      </div>
    );
  }
}

export default Steps;
