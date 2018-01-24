import React, { PureComponent as Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      title: ''
    }
    this._changeScreen = this._changeScreen.bind(this);
    this._exitPopUp = this._exitPopUp.bind(this);
    this._handleChange = this._handleChange.bind(this);
  }

  componentDidMount() {
    var currentDate = require("current-date");
    var todaysDate = currentDate('date');
    this.setState({date: todaysDate})

    if(localStorage.getItem('docname')){
      this.setState({title: localStorage.getItem('docname')})
    }
  }

  _changeScreen() {
    this.props.backToSteps()
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 10, 10, 180, 110);
    pdf.save("My_Brand_Session.pdf");
  });
  }

  _exitPopUp() {
    this.props.exitScreenOpen()
  }

  _handleChange(e) {
    this.setState({title: e.target.value}, function() {
      localStorage['docname'] = this.state.title;
    })
  }




  render() {

    return (
      <div id="previewContainer">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></button>
        <button className="exitButton" onClick={this._exitPopUp}><div id="exit">Exit</div></button>
        <button className="stepsButton" onClick={this._changeScreen}><div id="steps">Back To Steps</div></button>
        <h1 className="previewMainHeading">Here lies your handy work</h1>
        <h1 className="previewSubHeading">Add keywords to a previous step at any time.</h1>
        <div id="sessionNameContainer">
          <h1 id="sessionNameHeading">Give your session a name:</h1>
            <input type="search" className="sessionNameInputField" placeholder="Eg. Your working title" onChange={this._handleChange} value={this.state.title}/>
        </div>

        <div className="mb5">
          <button id="previewPrintSessionButton" onClick={this.printDocument}>Print Session Notes <i className="zmdi zmdi-download"></i></button>
        </div>
        <div id="divToPrint" className="mt4" style={{
          "backgroundColor": '#ffffff',
          "border": '10px solid black',
          "color": "black",
          "maxWidth": '210mm',
          "minHeight": '50mm',
          "padding": '20px',
          "marginLeft": 'auto',
          "marginRight": 'auto',
          "fontFamily": 'Montserrat',
          "fontSize": '20px'
        }}>

        <div>
          <h1 className="docHeading">Magic Beans</h1>
          <h1 className="docSubHeadings">Brand Session Date: {this.state.date}</h1>
          <h1 className="docSubHeadings">Working Title: {this.state.title}</h1>
          <h3>Brand Identity</h3>{this.props.identity.join(', ')}</div>
          <br />
          <div><h3>Audience</h3>{this.props.audience.join(', ')}</div>
          <br />
          <div><h3>Tone of Voice</h3>{this.props.tov.join(', ')}</div>
          <br />
          <div><h3>Point of Difference</h3>{this.props.pod.join(', ')}</div>
          <br />
          <div><h3>Naming</h3>{this.props.names.join(', ')}</div>
          <br />
        </div>
      </div>
    );
  }
}

export default Preview;
