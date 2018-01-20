import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["female", "30s - 50s", "mums", "males", "early adopters", "young people", "social media users", "corporate", "creative", "cool"],
      randoms: [],
      questionAlts: ["Have you thought of a name?", "What keywords best describe your idea?", "Creatively describe your idea / brand?"],
      newPhrase: ''
    }
    this._changeScreen = this._changeScreen.bind(this);
    this._changeHeading = this._changeHeading.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _changeScreen() {
    this.props.backToSteps()
  }

  _changeHeading () {
    console.log('change the question');
    let newHeading = this.state.questionAlts.slice()
    this.setState({newPhrase: newHeading.splice(Math.floor(Math.random()*newHeading.length),1)})
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    // console.log(query);
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
    return (
      <div id="stepFiveContainer">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></button>
        <a href="#"><div id="exit">Exit</div></a>
        {!this.state.newPhrase ? <h1>Does your idea / brand have a name?</h1> : <h1>{this.state.newPhrase}</h1>}
        <button onClick={this._changeHeading}>icon</button>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.query} />
        </form>
      </div>
    );
  }
}

export default Five;
