import React, { PureComponent as Component } from 'react';

class ExitPopUp extends Component {
  constructor(props) {
    super(props);
    this._endSession = this._endSession.bind(this);
  }

  _endSession() {
    this.props.endSession()
    console.log("Ready to clear session");
  }

  render() {
    return (
      <div>
      <div id="exitContainer">
          <h1>&times;</h1>
          <h1>Ideas are down, brains are tired, lets get outta here! <br />
          <br />
          Confirm youre officially done here by clicking the 'End Session' button & print your findings. Please note like all good ideas, our sessions are fleeting. Once you hit the confirm button your session is erased.</h1>
          <button onClick={this._endSession}>End Session</button>
      </div>
        <div className="exitPage">
        </div>
      </div>
    );
  }
}

export default ExitPopUp;
