import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';

const suggestions = ["premium", "approachable", ];

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    const query = this.state.query;
    // console.log(query);
    this.props.value(query)
    this.setState({
      query: ''
    });
  }


  _handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  render () {
    return (
      <div id="stepOneContainer">
        <h1>How do you want your brand to be percieved?</h1>
        <form onSubmit={this._handleSubmit}>
          <input type="search" onChange={this._handleChange} value={this.state.query}/>
        </form>
        <div></div>
      </div>
    );
  }
}


export default One;
