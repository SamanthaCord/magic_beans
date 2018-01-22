import React, { PureComponent as Component } from 'react';

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["premium", "approachable", "innovative", "bold", "creative", "fashion", "ecommerce", "engaging", "straight forward", "cool"],
      randoms: [],
      questionAlts: ["what is your product / idea?", "what are your strengths?", "what is your business / idea about?"],
      newPhrase: ''
    }
    this._changeScreen = this._changeScreen.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.randomise = this.randomise.bind(this);
    this._addItem = this._addItem.bind(this);
    this._changeHeading = this._changeHeading.bind(this);
    this._showPreview = this._showPreview.bind(this);
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

  _changeScreen() {
    this.props.backToSteps()
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

  _changeHeading() {
    console.log('change the question');
    let newHeading = this.state.questionAlts.slice()
    this.setState({newPhrase: newHeading.splice(Math.floor(Math.random()*newHeading.length),1)})
  }

  _showPreview () {
    this.props.showPreview()
  }

  render () {
    return (
      <div id="stepOneContainer">
        <button id='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4770/39797943482_e083e15fe2.jpg'
      } /></button>
        <h1 className="MainHeading">Magic Beans</h1>
        <a href="#"><div id="exit">Exit</div></a>
        <button className='previewButton' onClick={this._showPreview}>Preview Session</button>
        <h1>Brand Identity</h1>
        {!this.state.newPhrase ? <h1>How do you want your brand to be percieved?</h1> : <h1>{this.state.newPhrase}</h1>}
        <button onClick={this._changeHeading}>icon</button>
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
