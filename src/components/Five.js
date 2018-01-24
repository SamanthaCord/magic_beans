import React, { PureComponent as Component } from 'react';

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      questionAlts: ["Have you thought of a name?", "What keywords best describe your idea?", "Creatively describe your idea / brand?"],
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

  _changeHeading() {
    console.log('change the question');
    let newHeading = this.state.questionAlts.slice()
    this.setState({newPhrase: newHeading.splice(Math.floor(Math.random()*newHeading.length),1)})
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    // console.log(query);
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
    console.log("tried to delete an item");
    this.props.remove(i)
  }

  _showPreview() {
    this.props.showPreview()
  }

  _exitPopUp() {
    this.props.exitScreenOpen()
  }

  render() {
    return (
      <div id="stepFiveContainer">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4622/25996885548_9d35610eb9.jpg'
        } /></button>
        <h1 className="MainHeading">Magic Beans</h1>
        <button className="exitButton" onClick={this._exitPopUp}><div id="exit">Exit</div></button>
        <button className="stepsButton" onClick={this._changeScreen}><div id="steps">Back To Steps</div></button>
        <button className='previewButton' onClick={this._showPreview}>See Session Notes</button>
        <h1 className="stepMainHeading">5. NAMING</h1>
        {!this.state.newPhrase ? <h1 className="QuestionHeading">Does your idea / brand have a name?</h1> : <h1 className="QuestionHeading">{this.state.newPhrase}</h1>}
        <br />
        <button onClick={this._changeHeading} className="refreshButton"><i className="zmdi zmdi-refresh"></i></button>
        <div>
          <p id="step5subHeading"><span className="stuckHead">Stuck?</span> Try thinking of words or phrases that fit into one of these 3 categories: <span className="stuckHead">DESCRIPTIVE, KEYWORD or WILDCARD.</span> Be as creative as you like!</p>
        </div>
        <form onSubmit={this._handleSubmit}>
          <input type="search" className="stepsInputField" placeholder="Type here & hit enter to submit" onChange={this._handleChange} value={this.state.query} />
        </form>
        <div className="namingContainer">
          {this.props.names.map(i => {
          return <p className="bucketItems" key={this.props.names.indexOf(i)}>{i}<button className="bucketItemsXIcon" onClick={()=>{this._handleClick(i)}}><i className="zmdi zmdi-close-circle"></i></button></p>})}
        </div>
      </div>
    );
  }
}

export default Five;
