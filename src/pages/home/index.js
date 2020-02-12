import React, { Component } from 'react';
import { content } from './data';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="main-welcome-text">
            {/* <img src={namaste} alt="namaste" width={200} height={200}></img><br /> */}
            स्वागत आहे</div>
        </header>
        <div className="intro-text">आम्ही हि वेबसाईट मूक-बधिर मुले, त्यांचे शिक्षक आणि त्यांचा पालकांसाठी बनवत आहोत.
        हि वेबसाईट बनवण्यामागे कारण हे आहे कि आम्हाला त्यांचा शैक्षणिक अनुभव सुखद आणि सोईस्कर बनवायचा आहे.</div>
        <div className="section">
          <div className="background blue-purple"></div>
          <div className="background green-blue"></div>
          <div className="section-title-wrapper">
            <div className="section-title">पुढील गोष्टी येथे शिकल्या जाऊ शकतात</div>
          </div>
          {content.map(item => {
            if (item.name === "Color") {
              return (
                <div className="icon-wrapper">
                  <div className="svg-wrapper">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <div className="icon-title">{item.title}</div>
                </div>
              )
            }
            return (
              <div className="icon-wrapper">
                <div className="svg-wrapper">
                  <svg version="1.0" width="100%" height="100%" id="carpenter-logo" viewBox={item.vb} >
                    <g id="Carpenter" transform="translate(0.000000,289.000000) scale(0.100000,-0.100000)" strokeWidth="50">
                      {item.d.map(p => (
                        <path d={p} />
                      ))}
                    </g>
                  </svg>
                </div>
                <div className="svg-wrapper">
                  <svg version="1.0" width="100%" height="100%" id="carpenter-white" viewBox={item.vb} >
                    <g id="Carpenter" transform="translate(0.000000,289.000000) scale(0.100000,-0.100000)">
                      {item.d.map(p => (
                        <path d={p} />
                      ))}
                    </g>
                  </svg>
                </div>
                <div className="icon-title">{item.title}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;