import React, { PureComponent as Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultMessage: "Your session awaits! Keep adding keywords to explore your new idea and / or brand. Is that a spring in your step? Yes! We knew you could do it! Go! Thrill, Excite & Inspire! We believe in you!! ... Too much? Sorry about that.",
      msg: 0
    }
    this._changeScreen = this._changeScreen.bind(this);
    this._exitPopUp = this._exitPopUp.bind(this);
  }

  componentDidMount() {
    setTimeout(this.props.hideMsg, 6000)
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
    pdf.save("Brand_Session.pdf");
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
          <div>{this.props.msg === 0 ? this.state.defaultMessage : null}</div>
          <br />
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
