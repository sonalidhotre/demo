import React, { Component } from 'react';
import './ContentIndex.css';

class Index extends Component {
  constructor(props) {
    super(props)
  }

  showPage = (path) => {
    this.props.history.push('/'+path);
  }
  
  render() {
    return (
      <div className="App">
        <header className="header">
          <div className="welcome-text">अनुक्रमणिका</div>
        </header>
        <div className="color-title" onClick={() => this.showPage('colors')}>
          <div className="title">रंग</div>
        </div>
        <div className="shape-title" onClick={() => this.showPage('shapes')}>
          <div className="title">आकार</div>
        </div>
        <div className="alpha-title" onClick={() => this.showPage('alphabets')}>
          <div className="title">मुळाक्षरे</div>
        </div>
      </div>
    );
  }
}

export default Index;