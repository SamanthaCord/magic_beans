import React, { PureComponent as Component } from 'react';
import App from './App';
import Session from './Session';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Preview from './Preview';

class Steps extends Component {
  constructor(props) {
    super(props);
      this._changeScreen = this._changeScreen.bind(this);
      this._handleClickOne = this._handleClickOne.bind(this);
      this._handleClickTwo = this._handleClickTwo.bind(this);
      this._handleClickThree = this._handleClickThree.bind(this);
      this._handleClickFour = this._handleClickFour.bind(this);
      this._handleClickFive = this._handleClickFive.bind(this);
      this._showPreview = this._showPreview.bind(this);
  }

  _changeScreen() {
    this.props.backToSteps()
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
    this.props.showFour()
  }

  _handleClickFive () {
    console.log("open step 5");
    this.props.showFive()
  }

  _showPreview () {
    this.props.showPreview()
  }

  render () {
    return (
      <div id="wrapper">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
      } /></button>
        <a href="#"><div id="exit">Exit</div></a>
        <button className='previewButton' onClick={this._showPreview}>Preview Session</button>
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
