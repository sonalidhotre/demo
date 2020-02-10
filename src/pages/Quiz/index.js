import React, { Component } from 'react';

class Quiz extends Component {
  showPage = (path) => {
    this.props.history.push('/' + path);
  }
  
  render() {
    return (
      <div className="App">
        <header className="quiz-header">
          <div className="quiz-text">प्रश्नोत्तरी ( Quiz )</div>
        </header>
        <div className="index-wrapper">
          <div className="color-title" onClick={() => this.showPage('colorsQuiz')}>
            <div className="title">रंग प्रश्नोत्तरी</div>
          </div>
          <div className="shape-title" onClick={() => this.showPage('shapesQuiz')}>
            <div className="title">आकार प्रश्नोत्तरी</div>
          </div>
          <div className="alpha-title" onClick={() => this.showPage('alphabetsQuiz')}>
            <div className="title">मुळाक्षरे प्रश्नोत्तरी</div>
          </div>
          <div className="number-title" onClick={() => this.showPage('numbersQuiz')}>
            <div className="title">अंक प्रश्नोत्तरी</div>
          </div>
          <div className="alphabets-title" onClick={() => this.showPage('engAlphaQuiz')}>
            <div className="title">Alphabets (अल्फाबेट्स - इंग्रजी अक्षरे) Quiz</div>
          </div>
          <div className="nums-title" onClick={() => this.showPage('engNumbersQuiz')}>
            <div className="title">Numbers (नंबर - अंक)</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz