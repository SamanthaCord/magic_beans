import React, { PureComponent as Component } from 'react';

class StepsNav extends Component {
  constructor(props) {
    super(props);
    this._handleClickOne = this._handleClickOne.bind(this);
    this._handleClickTwo = this._handleClickTwo.bind(this);
    this._handleClickThree = this._handleClickThree.bind(this);
    this._handleClickFour = this._handleClickFour.bind(this);
    this._handleClickFive = this._handleClickFive.bind(this);
  }

  _handleClickOne() {
    console.log("open step 1");
    this.props.showOne()
  }

  _handleClickTwo() {
    console.log("open step 2");
    this.props.showTwo()
  }

  _handleClickThree() {
    console.log("open step 3");
    this.props.showThree()
  }

  _handleClickFour() {
    console.log("open step 4");
    this.props.showFour()
  }

  _handleClickFive() {
    console.log("open step 5");
    this.props.showFive()
  }

  render() {
    return (
        <div className="navigationButtons">
          <div id="editContainer">Edit</div>
          <button onClick={this._handleClickOne} id="stepNavOne">1</button>
          <button onClick={this._handleClickTwo} id="stepNavTwo">2</button>
          <button onClick={this._handleClickThree} id="stepNavThree">3</button>
          <button onClick={this._handleClickFour} id="stepNavFour">4</button>
          <button onClick={this._handleClickFive} id="stepNavFive">5</button>
        </div>
    );
  }
}

export default StepsNav;
