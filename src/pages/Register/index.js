import React, { Component } from 'react';
import './register.css';
import CheckboxGroup from 'react-checkbox-group';

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      email: '',
      password: '',
      role: 'teacher',
      allUsers: [],
      count: 0,
      roles: [],
      enableSubmit: false
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
    })
  }

  handleChange = (event) => {
    if (event.target.id === "uname") { this.setState({ uname: event.target.value }) }
    if (event.target.id === "email") { this.setState({ email: event.target.value }) }
    if (event.target.id === "password") { this.setState({ password: event.target.value }) }
  }

  isCheckboxSelected = () => {
    if (this.state.roles === []) {
      return false
    }
    return true
  }

  handleSubmit = () => {
    if (this.isCheckboxSelected()) {
      let arr = this.state.allUsers;
      arr.push({
        uname: this.state.uname,
        password: this.state.password,
        email: this.state.email,
        roles: this.state.roles
      })

      arr.map((user, i) => {
        firebase.database().ref(`users/${i + 1}`).set({
          uname: user.uname,
          email: user.email,
          password: user.password,
          roles: user.roles
        }).then(() => {
          console.log('INSERTED')
        }).catch((error) => {
          console.error('Error :: ', error)
        })
        firebase.database().ref('users/count').set(i + 1)
        return null
      })

      let path = `/login`;
      this.props.history.push(path);
    }
  }

  setRoles = (selected) => {
    let arr = selected
    if (selected.includes("student")) {
      arr = ["student"]
    }
    this.setState({
      roles: arr,
      enableSubmit: arr !== [] ? true : false
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Register-header">
          <div className="register-text">नोंदणी
            <div className="form-class">
              <div className="text-box-wrapper">
                <input id="uname" type="text" value={this.state.uname} placeholder="वापरकर्ताचे नाव"
                  onChange={this.handleChange} required />
              </div>
              <div className="text-box-wrapper">
                <input id="email" type="text" value={this.state.email} placeholder="ईमेल"
                  onChange={this.handleChange} required />
              </div>
              <div className="text-box-wrapper">
                <input id="password" type="password" value={this.state.password} placeholder="पासवर्ड"
                  onChange={this.handleChange} required />
              </div>
              <CheckboxGroup name="fruits" value={this.state.roles} onChange={this.setRoles}>
                {(Checkbox) => (
                  <>
                    <label>
                      <Checkbox value="teacher" /> शिक्षक</label>
                    <label>
                      <Checkbox value="student" /> विद्यार्थी</label>
                    <label>
                      <Checkbox value="parent" /> पालक</label>
                  </>
                )}
              </CheckboxGroup>
              <button className={this.state.enableSubmit ? "button" : "button button-disabled"}
                style={{ verticalAlign: "middle" }}
                onClick={this.handleSubmit}
                disabled={!this.state.enableSubmit}
              ><span>नोंदणी करा </span></button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Register;