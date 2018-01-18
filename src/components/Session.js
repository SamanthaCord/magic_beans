import React, { PureComponent as Component } from 'react';
import App from './App';



class Session extends Component {

  render () {
    return (
      <div id="session">
        <h1>Your Session Has Started!</h1>
        <p>"Don't freak out, we're all chilled here."</p>
        {setTimeout(function() {window.location.reload()}, 2000)}
      </div>
    );
  }
}

export default Session;
