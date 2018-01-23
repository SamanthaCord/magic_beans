import React, { PureComponent as Component } from 'react';

class ExitPopUp extends Component {
  constructor(props) {
    super(props);
    this._endSession = this._endSession.bind(this);
    this._exitPopUpClose = this._exitPopUpClose.bind(this);
    this._seeSessionNotes = this._seeSessionNotes.bind(this);
  }

  _seeSessionNotes() {
    this.props.seeSessionNotes()
    console.log("show preview page");
  }

  _endSession() {
    this.props.endSession()
    console.log("Ready to clear session");
  }

  _exitPopUpClose() {
    this.props.exitScreenClose()
  }

  render() {
    return (
      <div>
      <div id="exitContainer">
          <button id="XiconButton" onClick={this._exitPopUpClose}><h1 className="Xicon">&times;</h1></button>
          <h1 className="QuestionHeading">Ideas are down, brains are tired, lets get outta here! <br />
          <br />
          Click 'Print Session' to save a PDF of your notes. <br /> <br /> Click 'End Session' to exit or begin a new session.</h1>

          <button id="printSessionButton" onClick={this._seeSessionNotes}>Print Session</button>
          <button id="endButton" onClick={this._endSession}>End Session</button>

          <p id="exitDisclaimer">Like all good ideas, sessions are fleeting. Make sure to print / save a copy of your work, because once you hit 'end session' your session will be erased.</p>
      </div>
        <div className="exitPage">
        </div>
      </div>
    );
  }
}

export default ExitPopUp;
