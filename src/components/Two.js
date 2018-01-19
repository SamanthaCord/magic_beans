import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';


class Two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["premium", "approachable", "innovative", "bold", "creative", "fashion", "ecommerce", "engaging", "straight forward", "cool"],
      randoms: [],
      questionAlts: ["Who do you want to engage with?", "What type of people would like this?", "Who is your primary and secondary audience?"],
      newPhrase: ''
    }
    this._changeHeading = this._changeHeading.bind(this);
  }

  _changeHeading () {
    console.log('change the question');
    let newHeading = this.state.questionAlts.slice()
    this.setState({newPhrase: newHeading.splice(Math.floor(Math.random()*newHeading.length),1)})
  }

  render () {
    return (
      <div id="stepTwoContainer">
        <a href="/"><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></a>
        <a href="#"><div id="exit">Exit</div></a>
        {!this.state.newPhrase ? <h1>Who is your audience?</h1> : <h1>{this.state.newPhrase}</h1>}
        <button onClick={this._changeHeading}>icon</button>
      </div>
    );
  }
}

export default Two;
