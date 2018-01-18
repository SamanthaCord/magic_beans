import React, { PureComponent as Component } from 'react';
import App from './App';
import Session from './Session';


class Steps extends Component {
  render () {
    return (
      <div id="wrapper">
        <div id="one">1</div>
        <div id="two">2</div>
        <div id="three">3</div>
        <div id="four">4</div>
        <div id="five">5</div>
      </div>
    );
  }
}

export default Steps;
