import React, { Component } from 'react';
import './login.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      password: '',
      allUsers: [],
      count: 0,
    }
  }

  componentDidMount() {
    let arr = []
    const db = firebase.database().ref().child('users');
    const usersRef = db.child('count');
    let cnt = 0;
    usersRef.on('value', snap => {
      for (var i = 1; i <= snap.val(); i++) {
        db.child(`${i}`).on('value', snap => {
          arr.push(snap.val())
        })
      }
      cnt = snap.val();
    })
    this.setState({
      allUsers: arr,
      count: cnt
    }, console.log(' added >>', this.state.allUsers, this.state.count))
  }

  handleChange = (event) => {
    if (event.target.id === "uname") { this.setState({ uname: event.target.value }) }
    if (event.target.id === "password") { this.setState({ password: event.target.value }) }
  }

  handleSubmit = () => {
    let loginSuccessfull = false
    let matched = {}

    this.state.allUsers.map(user => {
      if (user.uname === this.state.uname && user.password === this.state.password) {
        matched = user
        loginSuccessfull = true
      }
      return null
    })

    cookies.set('thisuser', matched, { path: '/' });
    cookies.set('login', true, { path: '/' });
    console.log('logged user : ', cookies.get('thisuser'))

    if (loginSuccessfull) {
      let path = `/`;
      this.props.history.push(path);
    } else {
      this.setState({
        uname: '',
        password: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="login-text">लॉगिन
            <div className="form-class">
              <div className="text-box-wrapper">
                <input id="uname" type="text" value={this.state.uname} placeholder="वापरकर्ताचे नाव"
                  onChange={this.handleChange} required />
              </div>
              <div className="text-box-wrapper">
                <input id="password" type="password" value={this.state.password} placeholder="पासवर्ड"
                  onChange={this.handleChange} required />
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