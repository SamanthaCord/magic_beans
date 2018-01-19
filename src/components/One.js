import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';


class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["premium", "approachable", "3", "4", "5", "6", "7", "8", "9", "10"],
      randoms: []
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.randomise = this.randomise.bind(this)
    this._addItem = this._addItem.bind(this)
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
    this.setState({
      query: e.target.value
    });
  }

  _handleClick(i) {
    console.log("tried to delete an item");
    this.props.remove(i)
  }

  _addItem(e) {
    // console.log(e.target.value);
    this.props.addItem(e.target.value)
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
      <div id="stepOneContainer">
        <h1>How do you want your brand to be percieved?</h1>
        {this.randomise()}
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.query}/>
        </form>
        <div className="identityContainer">
          {this.props.identity.map(i => { return <p key={this.props.identity.indexOf(i)}>{i}<button onClick={ ()=>{this._handleClick(i)} }>&times;</button></p> })}
        </div>
      </div>
    );
  }
}

export default One;
