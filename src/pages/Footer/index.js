import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="section">
          <div className="footer-contact-wrapper">
            <div className="footer-header">आमच्याशी संपर्क साधा</div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-contact">
              <div>
                <img className="avatar" src={require("../../images/avatar1.jpg")} alt="avatar1" height="100px"/>
              </div>
              <div>दर्शन महेश धोत्रे</div>
              <div>dmdhotre99@gmail.com</div>
              <div>९०४९२४२२७०</div>
            </div>
          </div>
          <div className="footer-contact-wrapper">
            <div className="footer-contact">
              <div>
                <img className="avatar" src={require("../../images/avatar2.jpg")} alt="avatar2" height="100px"/>
              </div>
              <div>दर्शन महेश धोत्रे</div>
              <div>dmdhotre99@gmail.com</div>
              <div>९०४९२४२२७०</div>
            </div>
          </div>
        </div>
        <div className="footer-wrapper">वेबसाईट ला भेट दिल्या बद्दल धन्यवाद. ( We are glad You visited here. )</div>
      </footer>
    )
  }
}

export default Footer