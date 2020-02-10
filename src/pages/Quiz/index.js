import React, { Component } from 'react';

class Quiz extends Component {
  showPage = (path) => {
    this.props.history.push('/' + path);
  }
  
  render() {
    const indexes = ["रंग प्रश्नोत्तरी", "आकार प्रश्नोत्तरी", "मुळाक्षरे प्रश्नोत्तरी", "अंक प्रश्नोत्तरी", "अल्फाबेट्स प्रश्नोत्तरी", "नंबर प्रश्नोत्तरी"];
    return (
      <div className="App">
        <header className="quiz-header">
          <div className="quiz-text">प्रश्नोत्तरी ( Quiz )</div>
        </header>
        <div className="index-wrapper">
        {indexes.map((content, index) => {
            if (index % 2 === 0) {
              return (
                <div className="index-odd-title" onClick={() => this.showPage('shapes')}>
                  <div className="title">{content}</div>
                </div>
              )
            }
            return (
              <div className="index-even-title" onClick={() => this.showPage('colors')}>
                <div className="title">{content}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Quiz