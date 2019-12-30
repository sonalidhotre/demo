import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      password: '',
    }
  }

  handleChange = (event) => {
    if (event.target.id === "uname") { this.setState({ uname: event.target.value }) }
    if (event.target.id === "password") { this.setState({ password: event.target.value }) }
  }

  handleSubmit = () => {
    let path = `/`;
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="login-text">लॉगिन
            <div className="form-class">
              <div className="text-box-wrapper">
                <input id="uname" type="text" value={this.state.uname} placeholder="वापरकर्ताचे नाव"
                  onChange={this.handleChange} />
              </div>
              <div className="text-box-wrapper">
                <input id="password" type="password" value={this.state.password} placeholder="पासवर्ड"
                  onChange={this.handleChange} />
              </div>
              <button className="button"
                style={{ verticalAlign: "middle" }}
                onClick={this.handleSubmit}
              ><span>लॉगिन </span></button>
              <div className="link-wrapper"><a href="/register">नवीन अकाउंट तयार करा</a></div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Login;