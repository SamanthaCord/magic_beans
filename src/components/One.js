import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';


class One extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: ["premium", "approachable", "3", "4", "5", "6", "7", "8", "9", "10"]
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
          {this.state.suggestions.map( (s) => {
          return <button id="suggestions" key= { this.state.suggestions.indexOf(s) } value={ s }>{ s }
        </button>
        })}
        <div className="identityContainer">
          {this.props.identity.map(i => { return <p key={this.props.identity.indexOf(i)}>{i}</p> })}
        </div>
      </div>
    );
  }
}

export default One;
