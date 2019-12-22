import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="welcome-text">Welcome</div>
        </header>
        <div className="intro-text">We are making website
        for deaf and mute students, their parents and teachers.
        The motive behind making this website is we want to make their learning
      experience easy and fun.</div>
      </div>
    );
  }
}

export default Home;