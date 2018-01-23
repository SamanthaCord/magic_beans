
componentDidMount(){
  let { suggestions } = this.state;
  const length = suggestions.length
  this.setState({randoms: [
     suggestions.splice(this.randomNumber(length),1),
     suggestions.splice(this.randomNumber(length),1),
     suggestions.splice(this.randomNumber(length),1),
     suggestions.splice(this.randomNumber(length),1),
     suggestions.splice(this.randomNumber(length),1)
  ]})
}

randomNumber(length) {
  return Math.floor(Math.random() * length)
}

renderSuggestions() {
  const { randoms } = this.state

  return randoms.map(random => {
    return <button className="suggestionButtons" value={random} onClick={(e) => {this._addItem(e)}}>{random}</button>
  })

}

//calling it
{this.renderSuggestions()}
