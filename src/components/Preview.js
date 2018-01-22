import React, { PureComponent as Component } from 'react';
import App from './App';
import Steps from './Steps';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class Preview extends Component {
  constructor(props) {
    super(props);
    this._changeScreen = this._changeScreen.bind(this);
  }

  _changeScreen() {
    this.props.backToSteps()
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'JPEG', 10, 10, 180, 250);
    pdf.save("Brand_Session.pdf");
    });
  }

  render () {

    return(
      <div id="previewContainer">
        <button className='logobutton' onClick={this._changeScreen}><img id="logo" src={'https://farm5.staticflickr.com/4705/39067048194_d84d9a9542.jpg'
        } /></button>
        <a href="#"><div id="exit">Exit</div></a>
        <h1>Preview</h1>
        <div className="mb5">
          <button onClick={this.printDocument}>Print Session Notes</button>
        </div>
        <div id="divToPrint" className="mt4" style={{
          "backgroundColor": '#f5f5f5',
          "width": '210mm',
          "minHeight": '50mm',
          "padding": '50px',
          "marginLeft": 'auto',
          "marginRight": 'auto'
        }}>
          <div><h3>Brand Identity</h3>{this.props.identity.join(', ')}</div>
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
