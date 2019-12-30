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
          <div className="welcome-text">नमस्कार</div>
        </header>
        <div className="intro-text">आम्ही हि वेबसाईट मूक-बधिर मुले, त्यांचे शिक्षक आणि त्यांचा पालकांसाठी बनवत आहोत.
        हि वेबसाईट बनवण्यामागे कारण हे आहे कि आम्हाला त्यांचा शैक्षणिक अनुभव सुखद आणि सोईस्कर बनवायचा आहे.</div>
      </div>
    );
  }
}

export default Home;