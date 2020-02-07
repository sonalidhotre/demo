import React, { Component } from 'react';
import './Shapes.css';
import Child from './child';

class ShapesQuiz extends Component {
  constructor() {
    super();
    this.state = { count: 0, rerenderChild: true }
  }

  showPage = (path) => {
    this.props.history.push('/' + path);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1, rerenderChild: false }, () => {
      if (this.state.count < 8) {
        this.setState({ rerenderChild: true })
      }
    })
  }

  randomInt = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  }

  render() {
    return (
      <div className="App">
        <header className="shapes-header">
          <div className="welcome-text">आकार प्रश्नोत्तरी</div>
        </header>
        {this.state.rerenderChild
          && <Child wait={5000} color={this.randomInt(0, 6)} index={this.randomInt(0, 2)} increment={this.increment} />
        }
      </div>
    );
  }
}

export default ShapesQuiz;