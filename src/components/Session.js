import React, { PureComponent as Component } from 'react';
import App from './App';



class Session extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
  setTimeout(this.props.hide, 2000)
  console.log("session did mount");
  }

  render () {
    return (
      <div id="session">
        <h1>Your Session Has Started!</h1>
        <p>"Don't freak out, we're all chilled here."</p>
      </div>
    );
  }
}

export default Session;
