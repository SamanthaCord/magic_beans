import React, { PureComponent as Component } from 'react';
import App from './App';
import Session from './Session';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSession: false
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    console.log("the button was clicked");
    this.setState({showSession: true});
  }

  render() {
    return (
      <div>
        <h1>Magic Beans</h1>
        <h2>Grow your idea</h2>
        <button onClick={this._handleClick}>Start your session</button>
        {this.state.showSession ? <Session /> : null}
      </div>
    );
  }
}

export default Home;
