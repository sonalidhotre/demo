import React, { Component } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      email: '',
      password: '',
      confirmPass: '',
      role: 'teacher',
      allUsers: [],
      count: 0,
      roles: [],
      enableSubmit: false,
      fname: "",
      lname: "",
      showPassword: false,
      showConfirmPass: false,
      dob: new Date()
    }
  }

  componentDidMount() {
    let thisuser = cookies.get('thisuser')
    this.setState({
      fname: thisuser.fname,
      lname: thisuser.lname,
      uname: thisuser.uname,
      email: thisuser.email,
      password: thisuser.password,
      confirmPass: thisuser.confirmPass,
      roles: thisuser.roles,
      dob: new Date(thisuser.dob)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="Profile-header">
          <div className="Profile-text">प्रोफाइल ( Profile )
          <div className="container">
              <div className="wrapper">
                <div className="label">वापरकर्ताचे प्रथम नाव</div><div className="value">{this.state.fname}</div>
              </div>
              <div className="wrapper">
                <div className="label">वापरकर्ताचे आडनाव</div><div className="value">{this.state.lname}</div>
              </div>
              <div className="wrapper">
                <div className="label">वापरकर्तानाव ( username )</div><div className="value">{this.state.uname}</div>
              </div>
              <div className="wrapper">
                <div className="label">ईमेल</div><div className="value">{this.state.email}</div>
              </div>
              <div className="wrapper">
                <div className="label">वापरकर्त्याची जन्म तारीख</div><div className="value">
                  {`${this.state.dob.getDate()}/${this.state.dob.getMonth()}/${this.state.dob.getUTCFullYear()}`}</div>
              </div>
              <div className="wrapper">
                <div className="label">वापरकर्त्यांची भूमिका</div><div className="value">{this.state.roles.map(role => {
                  return `${role} `
                })}</div>
              </div>
            </div>
          </div>
        </header>
      </div >
    );
  }
}

export default Profile;