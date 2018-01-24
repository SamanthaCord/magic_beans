import React, { PureComponent as Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class Preview extends Component {
  constructor(props) {
    super(props);

    this._changeScreen = this._changeScreen.bind(this);
    this._exitPopUp = this._exitPopUp.bind(this);
  }

  _changeScreen() {
    this.props.backToSteps()
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 10, 10, 180, 120);
    pdf.save("My_Brand_Session.pdf");
  });
  }

  _exitPopUp() {
    this.props.exitScreenOpen()
  }

  render() {

    return (
      <div id="previewContainer">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></button>
        <button className="exitButton" onClick={this._exitPopUp}><div id="exit">Exit</div></button>
        <button className="stepsButton" onClick={this._changeScreen}><div id="steps">Back To Steps</div></button>
        <h1 className="previewMainHeading">Here lies your handy work</h1>
        <h1 className="previewSubHeading">ADD KEYWORDS TO A PREVIOUS STEP AT ANY TIME</h1>
        <div className="mb5">
          <button id="previewPrintSessionButton" onClick={this.printDocument}>Print Session Notes <i class="zmdi zmdi-download"></i></button>
        </div>
        <div id="divToPrint" className="mt4" style={{
          "backgroundColor": '#ffffff',
          "border": '10px solid black',
          "color": "black",
          "max-width": '210mm',
          "minHeight": '50mm',
          "padding": '20px',
          "marginLeft": 'auto',
          "marginRight": 'auto',
          "fontFamily": 'Montserrat',
          "fontSize": '20px'
        }}>

        <div>
          <h1 className="docHeading">Magic Beans</h1>
          <h1 className="docSubHeadings">Brand Session Date:</h1>
          <h1 className="docSubHeadings">Working Title: </h1>
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
