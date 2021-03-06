import React, { Component } from 'react';
import Child from './child';
import { indexes, optionList } from './data';

class ShapesQuiz extends Component {
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

  getOptions = () => {
    let optList = optionList;
    let opts = [];
    for (let index = 0; index < 4; index++) {
      let i = this.randomInt(0, 6 - opts.length);
      opts.push(optList[i]);
      optList = optList.filter(opt => opt !== opts[opts.length - 1])
      optList.push(opts[opts.length - 1])
    }
    return opts;
  }

  render() {
    return (
      <div className="App">
        <header className="shapes-header">
          <div className="welcome-text">आकार प्रश्नोत्तरी</div>
        </header>
        {this.state.rerenderChild
          && <Child
            wait={5000}
            color={this.randomInt(0, 6)}
            index={this.randomInt(0, 2)}
            increment={this.increment}
            options={this.getOptions()}
            offset={this.randomInt(0, 3)}
          />
        }
      </div>
    );
  }
}

export default ShapesQuiz;