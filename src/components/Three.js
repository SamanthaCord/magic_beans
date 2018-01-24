import React, { PureComponent as Component } from 'react';

class Three extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["Conversational", "Approachable", "Professional", "Friendly", "Creative", "Confident", "Not pushy", "Engaging", "Straight forward", "Cool", "Educated", "Effortless", "Quirky", "Relatable", "Trusting", "Prompt", "Considered", "Consistent"],
      randoms: [],
      questionAlts: ["How will you communicate?", "What language will you use?", "What is your TOV?", "How will your staff act?"],
      newPhrase: ''
    }
    this._changeHeading = this._changeHeading.bind(this);
    this._changeScreen = this._changeScreen.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._showPreview = this._showPreview.bind(this);
    this._exitPopUp = this._exitPopUp.bind(this);
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
    this.setState({newPhrase: newHeading.splice(Math.floor(Math.random()*newHeading.length), 1)})
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    this.props.addItem(query)
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
        <button className="suggestionButtons" value={this.state.randoms[0]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[0]}</button>
        <button className="suggestionButtons" value={this.state.randoms[1]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[1]}</button>
        <button className="suggestionButtons" value={this.state.randoms[2]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[2]}</button>
        <button className="suggestionButtons" value={this.state.randoms[3]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[3]}</button>
        <button className="suggestionButtons" value={this.state.randoms[4]} onClick={(e) => {this._addItem(e)}}>{this.state.randoms[4]}</button>
      </div>
    )
  }

  _showPreview () {
    this.props.showPreview()
  }

  _exitPopUp() {
    this.props.exitScreenOpen()
  }

  render() {
    return(
      <div id="stepThreeContainer">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4622/25996885548_9d35610eb9.jpg'
        } /></button>
        <h1 className="MainHeading">Magic Beans</h1>
        <button className="exitButton" onClick={this._exitPopUp}><div id="exit">Exit</div></button>
        <button className="stepsButton" onClick={this._changeScreen}><div id="steps">Back To Steps</div></button>
        <button className='previewButton' onClick={this._showPreview}>See Session Notes</button>
        <h1 className="stepMainHeading">3. TONE OF VOICE</h1>
        {!this.state.newPhrase ? <h1 className="QuestionHeading">How does your brand talk?</h1> : <h1 className="QuestionHeading">{this.state.newPhrase}</h1>}
        <br />
        <button onClick={this._changeHeading} className="refreshButton"><i className="zmdi zmdi-refresh"></i></button>
        <div>
          <p className="suggestionsHeading">STUCK? ADD SOME OF THESE:</p>
          {this.randomise()}
        </div>
        <form onSubmit={this._handleSubmit}>
          <input type="search" className="stepsInputField" placeholder="Type here & hit enter to submit" onChange={this._handleChange} value={this.state.query} />
        </form>
        <div className="tovContainer">
          {this.props.tov.map(i => {
            return <p className="bucketItems" key={this.props.tov.indexOf(i)}>{i}<button className="bucketItemsXIcon" onClick={() => {this._handleClick(i)}}><i className="zmdi zmdi-close-circle"></i></button></p>})}
        </div>
      </div>
    );
  }
}

export default Three;
