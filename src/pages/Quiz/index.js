import React, { Component } from 'react';
import './quiz.css';

class Quiz extends Component {
  render() {
    // console.log('>>', quizList)
    return (
      <div className="App">
        <header className="quiz-header">
          <div className="quiz-text">प्रश्नोत्तरी ( Quiz )</div>
        </header>
        <div className="index-wrapper">
          <div className="color-title" onClick={() => this.showPage('colorsQuiz')}>
            <div className="title">रंग प्रश्नोत्तरी</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz