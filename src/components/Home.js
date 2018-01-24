import React, { PureComponent as Component } from 'react';

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
    <div id="homeContainer">
      <h1 id="siteTitle">Magic Beans</h1>
      <h2 id="tagline">Grow your Idea.</h2>
      <div id="bean1"></div>
      <div id="bean2"></div>
      <div id="bean3"></div>
      <div id="bean4"></div>
      <div id="bean5"></div>
      <div id="bean6"></div>
      <div id="bean7"></div>
      <button id="startSessionButton" onClick={this._handleClick}>Start a session Now</button>
        <p id="footNote">©2018 <span id="developedBy">Developed by <a href="https://github.com/SamanthaCord" target="_blank">CODA</a></span></p>
    </div>
    );
  }
}

export default Home;
