import React, { Component } from 'react';
import { quizList } from './data';
import { swing } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const swingAnimation = keyframes`${swing}`;

const SwingDiv = styled.div`
  animation: 1s ${swingAnimation};
`;

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = { hidden: "", swingTheRightOne: false };
  }
  componentWillMount() {
    var that = this;
    setTimeout(function () {
      that.swing();
      setTimeout(function () {
        that.hide();
      }, 2000);
    }, that.props.wait);
  }
  swing() {
    this.setState({ swingTheRightOne: true })
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
      if (opt.id === quizList[this.props.color].id) {
        flag = true;
      }
      return null;
    })
    if (!flag) {
      let obj = quizList.filter(opt => opt.id === quizList[this.props.color].id)[0];
      optList[this.props.offset] = obj;
    }
    if (this.state.hidden === "hidden") {
      return null
    }
    return (
      <div className="quiz-super-wrapper">
        <div className="quiz-layout">
          <div className="quiz-main-area">
            <img src={quizList[this.props.color].source} alt={quizList[this.props.color].id} height="100%"></img>
          </div>
          <div className="quiz-options">
            {optList.map(opt => {
              if (this.state.swingTheRightOne
                && quizList[this.props.color].id === opt.id) {
                return (
                  <SwingDiv className="option num-title">{opt.title}</SwingDiv>
                )
              }
              return (
                <div className="option num-title">{opt.title}</div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Child;