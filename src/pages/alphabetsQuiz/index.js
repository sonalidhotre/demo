import React, { Component } from 'react';

class Numbers extends Component {
  showPage = (path) => {
    this.props.history.push('/' + path);
  }

  handleChoice = (chosen) => {
    if(chosen === 'swar'){
      this.showPage('swar')
    } else if (chosen === 'vyanjan'){
      this.showPage('vyanjan')
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="alpha-header">
          <div className="welcome-text">मुळाक्षरे प्रश्नोत्तरी</div>
        </header>
        <div className="alphabet-wrapper">
          <div className="alphabet-btn-wrapper">
            <div className="icon"><i class="far fa-check-circle"></i></div>
            <div className="message">पर्याय निवडा</div>
            <button className="button"
              style={{ verticalAlign: "middle" }}
              onClick={() => {this.handleChoice('swar')}}
            ><span>स्वर </span></button>
            <button className="button"
              style={{ verticalAlign: "middle" }}
              onClick={() => this.handleChoice('vyanjan')}
            ><span>व्यंजन </span></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Numbers;