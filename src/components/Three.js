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
    this._handleClick = this._handleClick.bind(this);
    this.randomise = this.randomise.bind(this);
    this._addItem = this._addItem.bind(this);
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

  componentDidMount(){
    let randomSuggest = this.state.suggestions.slice();
    this.setState({randoms: [
       randomSuggest.splice(Math.floor(Math.random()*randomSuggest.length),1),
       randomSuggest.splice(Math.floor(Math.random()*randomSuggest.length),1),
       randomSuggest.splice(Math.floor(Math.random()*randomSuggest.length),1),
       randomSuggest.splice(Math.floor(Math.random()*randomSuggest.length),1),
       randomSuggest.splice(Math.floor(Math.random()*randomSuggest.length),1)
    ]})
  }

  _handleChange(e) {
    this.setState ({
      query: e.target.value
    });
  }

  _handleClick(i) {
    // console.log("tried to delete an item");
    this.props.remove(i)
  }

  _addItem(e) {
    this.props.addItem(e.target.value);
  }

  randomise() {
    let randomSuggest = this.state.suggestions.slice();

    return (
      <div>
        <button value={this.state.randoms[0]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[0]}</button>
        <button value={this.state.randoms[1]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[1]}</button>
        <button value={this.state.randoms[2]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[2]}</button>
        <button value={this.state.randoms[3]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[3]}</button>
        <button value={this.state.randoms[4]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[4]}</button>
      </div>
    )
  }

  render() {
    return(
      <div id="stepThreeContainer">
        <a href="/"><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></a>
        <a href="#"><div id="exit">Exit</div></a>
        {!this.state.newPhrase ? <h1>How will your idea / brand communicate?</h1> : <h1>{this.state.newPhrase}</h1>}
        <button onClick={this._changeHeading}>icon</button>
        {this.randomise()}
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.query} />
        </form>
        <div className="tovContainer">
          {this.props.tov.map(i => {
            return <p key={this.props.tov.indexOf(i)}>{i}<button onClick={() => {this._handleClick(i)}}>&times;</button></p>})}
        </div>
      </div>
    );
  }
}

export default Three;