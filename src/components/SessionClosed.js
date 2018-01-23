import React, { PureComponent as Component } from 'react';

class SessionClosed extends Component {

  componentDidMount () {
    setTimeout(this.props.close, 2000)
  }

  render() {
    return(
      <div id="sessionClosingScreen">
        <h1 id="sessionClosedHeading">Closing Your Session Now</h1>
        <p id="sessionClosedSubHead">You Did Awesome. See you next time!</p>
        <p id="symbol">MB</p>
      </div>
    );
  }
}

export default SessionClosed;
