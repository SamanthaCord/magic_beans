import React, { PureComponent as Component } from 'react';
import Timer from 'react.timer';

const handleFinish = function () {
  console.log('Skynet has become self-aware!');
}

class Session extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    setTimeout(this.props.hide, 3005)
    console.log("session did mount");
  }


  render() {
    return (
      <div id="session">
        <h1 id="sessionHeading">Loading Your Session</h1>
        <p id="sessionSubHeading">Dont freak out. Everything (here) is cool, but also warm.</p>
        <h1 id="timer"><Timer countDown startTime={3.0} /></h1>
      </div>

    );
  }
}

export default Session;
