import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["premium", "approachable", "innovative", "bold", "creative", "fashion", "ecommerce", "engaging", "straight forward", "cool"],
      randoms: [],
      questionAlts: ["what is your product / idea?", "what are your strengths?", "what is your business / idea about?"],
      newPhrase: ''
    }
  }

  render() {
    return(
      <div id="stepThreeContainer">
        <h1>Three</h1>
      </div>
    );
  }
}

export default Three;
