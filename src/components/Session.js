import React, { PureComponent as Component } from 'react';

class Session extends Component {

  componentDidMount() {
  setTimeout(this.props.hide, 3000)
  console.log("session did mount");
  }


  render() {
    return (
      <div id="session">
        <h1 id="sessionHeading">Your Session Has Started</h1>
        <p id="sessionSubHeading">Dont freak out. Everything (here) is cool, but also warm.</p>
      </div>
  
    );
  }
}

export default Session;
