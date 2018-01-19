import React, { PureComponent as Component } from 'react';
import App from './App';



class Home extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    console.log("the button was clicked");
    this.props.show()
  }

  render() {
    return (
    <div>
        <h1>Magic Beans</h1>
        <h2>Grow your idea</h2>
        <button onClick={this._handleClick}>Start your session</button>
      </div>
    );
  }
}

export default Home;
