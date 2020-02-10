import React, { Component } from 'react';

class Quiz extends Component {
  showPage = (path) => {
    this.props.history.push('/' + path);
  }

  render() {
    const indexes = [
      { name: "रंग प्रश्नोत्तरी", path: "ColorsQuiz" },
      { name: "आकार प्रश्नोत्तरी", path: "ShapesQuiz" },
      { name: "मुळाक्षरे प्रश्नोत्तरी", path: "alphabetsQuiz" },
      { name: "अंक प्रश्नोत्तरी", path: "numbersQuiz" },
      { name: "अल्फाबेट्स प्रश्नोत्तरी", path: "engAlphaQuiz" },
      { name: "नंबर प्रश्नोत्तरी", path: "engNumbersQuiz" }
    ];
    return (
      <div className="App">
        <header className="quiz-header">
          <div className="quiz-text">प्रश्नोत्तरी ( Quiz )</div>
        </header>
        <div className="index-wrapper">
          {indexes.map((content, index) => {
            if (index % 2 === 0) {
              return (
                <div className="index-odd-title" onClick={() => this.showPage(content.path)}>
                  <div className="title">{content.name}</div>
                </div>
              )
            }
            return (
              <div className="index-even-title" onClick={() => this.showPage(content.path)}>
                <div className="title">{content.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Quiz