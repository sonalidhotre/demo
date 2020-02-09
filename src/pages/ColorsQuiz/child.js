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
      }, 2000)
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
    let optionList = this.props.options;
    if (this.props.options.indexOf(quizList[this.props.color].images[this.props.index].color) === -1) {
      optionList[this.props.offset] = quizList[this.props.color].images[this.props.index].color;
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
            {optionList.map(opt => {
              if (this.state.swingTheRightOne
                && quizList[this.props.color].images[this.props.index].color === opt) {
                return <SwingDiv style={{ backgroundColor: opt }} className="option"></SwingDiv>
              }
              return (
                <div style={{ backgroundColor: opt }} className="option"></div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Child;