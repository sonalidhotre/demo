import React, { Component } from 'react';

class Index extends Component {
  showPage = (path) => {
    this.props.history.push('/' + path);
  }

  render() {
    const indexes = ["रंग", "आकार", "मुळाक्षरे", "अंक", "अल्फाबेट्स", "नंबर"];
    return (
      <div className="App">
        <header className="index-header">
          <div className="index-text">अनुक्रमणिका</div>
        </header>
        <div className="index-wrapper">
          {indexes.map((content, index) => {
            if (index % 2 === 0) {
              return (
                <div className="index-odd-title" onClick={() => this.showPage('shapes')}>
                  <div className="title">{content}</div>
                </div>
              )
            }
            return (
              <div className="index-even-title" onClick={() => this.showPage('colors')}>
                <div className="title">{content}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Index;