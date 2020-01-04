import React, { Component } from 'react'
import './quiz.css';

class Quiz extends Component {
  render() {
    return (
      <div className="quiz-super-wrapper">
        <div className="quiz-wrapper">
          <img src={require("../../images/stayTuned.jpg")} alt="stay tuned"></img>
        </div>
      </div>
    )
  }
}

export default Quiz