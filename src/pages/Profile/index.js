import React, { Component } from 'react';
import './profile.css';
import CheckboxGroup from 'react-checkbox-group';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      email: '',
      password: '',
      roles: [],
    }
  }

  componentDidMount() {
    let thisuser = cookies.get('thisuser')
    this.setState({
      uname: thisuser.uname,
      email: thisuser.email,
      password: thisuser.password,
      roles: thisuser.roles
    })
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
        <header className="Profile-header">
          <div className="Profile-text">प्रोफाइल ( Profile )
            <div className="form-class">
              <div className="text-box-wrapper">
                <input id="uname" type="text" value={this.state.uname} placeholder="वापरकर्ताचे नाव" readOnly />
              </div>
              <div className="text-box-wrapper">
                <input id="email" type="text" value={this.state.email} placeholder="ईमेल" readOnly />
              </div>
              <div className="text-box-wrapper">
                <input id="password" type="password" value={this.state.password} placeholder="पासवर्ड" readOnly />
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
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Profile;