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
      questionAlts: ["How will you communicate?", "How does your brand talk?", "What is your TOV?"],
      newPhrase: ''
    }
    this._changeHeading = this._changeHeading.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _changeHeading() {
    console.log('change the question');
    let newHeading = this.state.questionAlts.slice()
    this.setState({newPhrase: newHeading.splice(Math.floor(Math.random()*newHeading.length), 1)})
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    this.props.value(query)
    this.setState({
      query: ''
    });
  }

  _handleChange(e) {
    this.setState ({
      query: e.target.value
    });
  }

  render() {
    return(
      <div id="stepThreeContainer">
        <a href="/"><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></a>
        <a href="#"><div id="exit">Exit</div></a>
        {!this.state.newPhrase ? <h1>How will your idea / brand communicate?</h1> : <h1>{this.state.newPhrase}</h1>}
        <button onClick={this._changeHeading}>icon</button>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.query} />
        </form>
      </div>
    );
  }
}

export default Three;
