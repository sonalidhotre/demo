import React, { Component } from 'react';
import './App.css';
// import HMenu from './menu';
import Pages from './pages';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hMenu: true
    }
  }

  render() {
    return (
      <div className="App">
        <Pages></Pages>
      </div>
    );
  }
}

export default App;
