import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';

class Four extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["innovative", "approachable", "ease of use", "creative", "variety", "bold", "price point"],
      randoms: [],
      questionAlts: ["What is your niche?", "What sets your brand / idea apart?", "What are your main strengths?"],
      newPhrase: ''
    }
    this._changeScreen = this._changeScreen.bind(this);
    this._changeHeading = this._changeHeading.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this.randomise = this.randomise.bind(this);
    this._addItem = this._addItem.bind(this);
  }

  _changeScreen() {
    this.props.backToSteps()
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

  _changeHeading() {
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

  _handleClick(i) {
    console.log("tried to delete an item");
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

  render () {
    return (
      <div id="stepFourContainer">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></button>
        <a href="#"><div id="exit">Exit</div></a>
        {!this.state.newPhrase ? <h1>What is your POD?</h1> : <h1>{this.state.newPhrase}</h1>}
        <button onClick={this._changeHeading}>icon</button>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.query} />
        </form>
        {this.randomise()}
        <div className="podContainer">
          {this.props.pod.map(i => {
          return <p key={this.props.pod.indexOf(i)}>{i}<button onClick={()=>{this._handleClick(i)}}>&times;</button></p>})}
        </div>
      </div>
    )
  }
}

export default Four;