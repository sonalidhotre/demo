import React, { Component } from 'react';

class Index extends Component {
  showPage = (path) => {
    this.props.history.push('/' + path);
  }

  render() {
    const indexes = [
      { name: "रंग", path: "colors" },
      { name: "आकार", path: "shapes" },
      { name: "मुळाक्षरे", path: "alphabets" },
      { name: "अंक", path: "numbers" },
      { name: "अल्फाबेट्स", path: "engAlpha" },
      { name: "नंबर", path: "engNumbers" }
    ];
    return (
      <div className="App">
        <header className="index-header">
          <div className="index-text">अनुक्रमणिका</div>
        </header>
        <div className="index-wrapper">
          {indexes.map((content, index) => {
            if (index % 2 === 0) {
              return (
                <div className="index-odd-title" onClick={() => this.showPage(content.path)}>
                  <div className="title">{content.name}</div>
                </div>
              )
            }
            return (
              <div className="index-even-title" onClick={() => this.showPage(content.path)}>
                <div className="title">{content.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Index;