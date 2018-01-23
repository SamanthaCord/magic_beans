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
    let { suggestions } = this.state;
    const length = suggestions.length
    this.setState({randoms: [
       suggestions.splice(this.randomNumber(length),1),
       suggestions.splice(this.randomNumber(length),1),
       suggestions.splice(this.randomNumber(length),1),
       suggestions.splice(this.randomNumber(length),1),
       suggestions.splice(this.randomNumber(length),1)
    ]})
  }

  randomNumber(length) {
    return Math.floor(Math.random() * length)
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

  renderSuggestions() {
    const { randoms } = this.state

    return randoms.map(random => {
      return <button value={random} onClick={(e) => {this._addItem(e)}}>{random}</button>
    })

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
        <button id='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4770/39797943482_e083e15fe2.jpg'
      } /></button>
        <h1 className="MainHeading">Magic Beans</h1>
        <button className="exitButton" onClick={this._exitPopUp}><div id="exit">Exit</div></button>
        <button className="stepsButton" onClick={this._changeScreen}><div id="steps">Back To Steps</div></button>
        <button className='previewButton' onClick={this._showPreview}>SEE MY SESSION NOTES</button>
        <h1>Brand Identity</h1>
        {!this.state.newPhrase ? <h1>How do you want your brand to be percieved?</h1> : <h1>{this.state.newPhrase}</h1>}
        <button onClick={this._changeHeading}>icon</button>
        <div>{this.renderSuggestions()}</div>
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
