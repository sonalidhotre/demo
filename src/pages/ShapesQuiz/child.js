import React, { Component } from 'react';
import { quizList, optionList } from './data';
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
            {optList.map(opt => {
              if (this.state.swingTheRightOne
                && quizList[this.props.color].images[this.props.index].shape === opt.name) {
                return (
                  <SwingDiv className="option">
                    <img src={opt.src} alt={opt.name} height="100%"></img>
                  </SwingDiv>
                )
              }
              return (
                <div className="option">
                  <img src={opt.src} alt={opt.name} height="100%"></img>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Child;