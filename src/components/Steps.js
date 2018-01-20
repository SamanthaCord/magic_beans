import React, { PureComponent as Component } from 'react';
import App from './App';
import Session from './Session';
import One from './One';
import Two from './Two';
import Three from './Three';

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
    this.props.showTwo()
  }

  _handleClickThree () {
    console.log("open step 3");
    this.props.showThree()
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
        <a href="/"><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></a>
        <a href="#"><div id="exit">Exit</div></a>
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
