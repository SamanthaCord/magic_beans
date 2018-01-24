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
    this._addItem = this._addItem.bind(this);
    this._changeHeading = this._changeHeading.bind(this);
    this._showPreview = this._showPreview.bind(this);
    this._exitPopUp = this._exitPopUp.bind(this);
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

  _changeScreen = () => {
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

    return (
      <div>
        <button className="suggestionButtons" value={this.state.randoms[0]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[0]}</button>
        <button className="suggestionButtons" value={this.state.randoms[1]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[1]}</button>
        <button className="suggestionButtons" value={this.state.randoms[2]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[2]}</button>
        <button className="suggestionButtons" value={this.state.randoms[3]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[3]}</button>
        <button className="suggestionButtons" value={this.state.randoms[4]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[4]}</button>
      </div>
    )
  }

  _changeHeading() {
    console.log('change the question');
    let newHeading = this.state.questionAlts.slice()
    this.setState({newPhrase: newHeading.splice(Math.floor(Math.random()*newHeading.length),1)})
  }

  _showPreview() {
    this.props.showPreview()
  }

  _exitPopUp() {
    this.props.exitScreenOpen()
  }

  render() {
    return (
      <div id="stepOneContainer">
        <button id='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4622/25996885548_9d35610eb9.jpg'
      } /></button>
        <h1 className="MainHeading">Magic Beans</h1>
        <button className="exitButton" onClick={this._exitPopUp}><div id="exit">Exit</div></button>
        <button className="stepsButton" onClick={this._changeScreen}><div id="steps">Back To Steps</div></button>
        <button className='previewButton' onClick={this._showPreview}>See Session Notes</button>
        <h1 className="stepMainHeading">BRAND IDENTITY</h1>
        {!this.state.newPhrase ? <h1 className="QuestionHeading">How do you want your brand to be percieved?</h1> : <h1 className="QuestionHeading">{this.state.newPhrase}</h1>}
        <br />
        <button onClick={this._changeHeading} className="refreshButton"><i className="zmdi zmdi-refresh"></i></button>
        <div>
          <p className="suggestionsHeading">STUCK? ADD SOME OF THESE:</p>
          {this.randomise()}
        </div>
        <form onSubmit={this._handleSubmit}>
          <input type="search" className="stepsInputField" placeholder="Start typing here & hit enter to submit" onChange={this._handleChange} value={this.state.query}/>
        </form>
        <div className="identityContainer">
          {this.props.identity.map(i => { return <p className="bucketItems" key={this.props.identity.indexOf(i)}>{i}<button className="bucketItemsXIcon" onClick={ ()=>{this._handleClick(i)} }><i className="zmdi zmdi-close-circle"></i></button></p> })}
        </div>
      </div>
    );
  }
}

export default One;
