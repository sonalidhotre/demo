import React, { Component } from 'react';
import { quizList, optionList } from './data';

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
    let flag = false;
    let optList = this.props.options;
    optList.map(opt => {
      if (opt.name === quizList[this.props.color].images[this.props.index].shape) {
        flag = true;
      }
      return null;
    })
    if (!flag) {
      let obj = optionList.filter(opt => opt.name === quizList[this.props.color].images[this.props.index].shape)[0];
      optList[this.props.offset] = obj;
    }
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
            {optList.map(opt => (
              <div className="option">
                <img src={opt.src} alt={opt.name} height="100%"></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Child;