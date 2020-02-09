import React, { Component } from 'react';
import { quizList } from './data';

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = { hidden: "" };
  }
  componentWillMount() {
    var that = this;
    setTimeout(function () {
      that.hide();
    }, that.props.wait);
  }
  hide() {
    this.setState({ hidden: "hidden" }, () => {
      this.props.increment()
    });
  }
  render() {
    let optionList = this.props.options;
    if (this.props.options.indexOf(quizList[this.props.color].images[this.props.index].color) === -1) {
      optionList[this.props.offset] = quizList[this.props.color].images[this.props.index].color;
    }
    console.log('>>', optionList, this.props.offset, quizList[this.props.color].images[this.props.index].color)
    if (this.state.hidden === "hidden") {
      return null
    }
    return (
      <div className="quiz-super-wrapper">
        <div className="quiz-layout">
          <div className="quiz-main-area">
            <img src={quizList[this.props.color].images[this.props.index].source} alt={quizList[0].images[0].id} height="85%"></img>
            <div className="title">{quizList[this.props.color].images[this.props.index].name}</div>
          </div>
          <div className="quiz-options">
            {optionList.map(opt => (
              <div style={{ backgroundColor: opt }} className="option"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Child;