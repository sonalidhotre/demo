import React, { Component } from 'react';
import './quiz.css';

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
          <div className="alpha-title" onClick={() => this.showPage('alphabets')}>
            <div className="title">मुळाक्षरे</div>
          </div>
          <div className="number-title" onClick={() => this.showPage('numbers')}>
            <div className="title">अंक</div>
          </div>
          <div className="alphabets-title" onClick={() => this.showPage('engAlpha')}>
            <div className="title">Alphabets (अल्फाबेट्स - इंग्रजी अक्षरे)</div>
          </div>
          <div className="nums-title" onClick={() => this.showPage('engNumbers')}>
            <div className="title">Numbers (नंबर - अंक)</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz