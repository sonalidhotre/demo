import React, { Component } from 'react';
import Child from './child';
import { indexes } from './data';

class ColorsQuiz extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      rerenderChild: true,
      indexes: indexes,
      x: null,
      y: null
    }
  }

  showPage = (path) => {
    this.props.history.push('/' + path);
  }

  increment = () => {
    const i = this.randomInt(0, 20 - this.state.count - 1);
    var ids = this.state.indexes.filter((id, index) => (index !== i));
    const obj = this.state.indexes[i];
    ids.push(obj);
    this.setState({ count: this.state.count + 1, indexes: ids, rerenderChild: false, x: obj.x, y: obj.y }, () => {
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
        <header className="colors-header">
          <div className="welcome-text">रंग प्रश्नोत्तरी</div>
        </header>
        {this.state.rerenderChild
          && <Child wait={5000} color={this.state.x || this.randomInt(0, 6)} index={this.state.y || this.randomInt(0, 2)} increment={this.increment} />
        }
      </div>
    );
  }
}

export default ColorsQuiz;