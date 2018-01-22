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
          <button onClick={this._exitPopUpClose}><h1>&times;</h1></button>
          <h1>Ideas are down, brains are tired, lets get outta here! <br />
          <br />
          Confirm youre officially done here by clicking the 'End Session' button & print your findings. Please note like all good ideas, our sessions are fleeting. Once you hit the confirm button your session is erased.</h1>
          <button onClick={this._seeSessionNotes}>Print Session</button>
          <button onClick={this._endSession}>End Session</button>
      </div>
        <div className="exitPage">
        </div>
      </div>
    );
  }
}

export default ExitPopUp;
