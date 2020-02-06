import React, { Component } from 'react';
import { quizList } from './data';
import './quiz.css';

class Quiz extends Component {
  render() {
    console.log('>>', quizList)
    return (
      <div className="App">
        <header className="quiz-header">
          <div className="quiz-text">प्रश्नोत्तरी(Quiz)</div>
        </header>
        <div className="quiz-super-wrapper">
          {/* <div className="quiz-wrapper">
            <img src={require("../../images/stayTuned.jpg")} alt="stay tuned"></img>
          </div> */}
          <div className="quiz-layout">
            <div className="quiz-main-area">
              <img src={quizList[0].images[0].source} alt={quizList[0].images[0].id} height="85%"></img>
              <div>{quizList[0].images[0].name}</div>
            </div>
            <div className="quiz-options">
              <div className="option"></div>
              <div className="option"></div>
              <div className="option"></div>
              <div className="option"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quiz