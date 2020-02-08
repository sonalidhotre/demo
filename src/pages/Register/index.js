import React, { Component } from 'react';
import CheckboxGroup from 'react-checkbox-group';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-date-picker';

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
    if (event.target.id === "fname") { this.setState({ fname: event.target.value }) }
    if (event.target.id === "lname") { this.setState({ lname: event.target.value }) }
    if (event.target.id === "uname") { this.setState({ uname: event.target.value }) }
    if (event.target.id === "email") { this.setState({ email: event.target.value }) }
    if (event.target.id === "password") { this.setState({ password: event.target.value }) }
    if (event.target.id === "confirm") { this.setState({ confirmPass: event.target.value }) }
  }

  isCheckboxSelected = () => {
    if (this.state.fname === '') {
      document.getElementById('fname').focus()
      toast.error("वापरकर्त्याचे प्रथम नाव भरणे अनिवार्य आहे.")
      return false
    } else if (this.state.lname === '') {
      document.getElementById('lname').focus()
      toast.error("वापरकर्त्याचे आडनाव भरणे अनिवार्य आहे.")
      return false
    } else if (this.state.uname === '') {
      document.getElementById('uname').focus()
      toast.error("वापरकर्तानाव भरणे अनिवार्य आहे.")
      return false
    } else if (this.state.email === '') {
      document.getElementById('email').focus()
      toast.error("इमेल भरणे अनिवार्य आहे.")
      return false
    } else if (this.state.password === '') {
      document.getElementById('password').focus()
      toast.error("पासवर्ड भरणे अनिवार्य आहे.")
      return false
    } else if (this.state.confirmPass === '') {
      document.getElementById('confirm').focus()
      toast.error("कन्फर्म पासवर्ड भरणे अनिवार्य आहे.")
      return false
    } else if (Array.isArray(this.state.roles) && this.state.roles.length < 1) {
      toast.error("कृपया रोल सिलेक्ट करा.")
      return false
    } else if (this.state.password !== this.state.confirmPass) {
      toast.error("हे पासवर्ड जुळत नाहीत कृपया पुन्हा प्रयत्न करा.")
      return false
    } else if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email))) {
      document.getElementById('email').focus()
      toast.error("टाईए केलेला इमेल आयडी योग्य नाही")
    } else if (!this.state.dob) {
      document.getElementById('dob').focus()
      toast.error("जन्म तारीख भरणे अनिवार्य आहे.")
    } else if (this.state.dob.getDate() === new Date().getDate() && this.state.dob.getMonth() === new Date().getMonth()
      && this.state.dob.getFullYear() === new Date().getFullYear()) {
      document.getElementById('dob').focus()
      toast.error("जन्म तारीख चुकीची आहे.")
    }
    return true
  }

  handleSubmit = () => {
    if (this.isCheckboxSelected()) {
      let arr = this.state.allUsers;
      arr.push({
        fname: this.state.fname,
        lname: this.state.lname,
        uname: this.state.uname,
        password: this.state.password,
        confirmPass: this.state.confirmPass,
        email: this.state.email,
        roles: this.state.roles,
        dob: this.state.dob.toString()
      })

      arr.map((user, i) => {
        firebase.database().ref(`users/${i + 1}`).set({
          fname: user.fname,
          lname: user.lname,
          uname: user.uname,
          email: user.email,
          password: user.password,
          confirmPass: user.confirmPass,
          roles: user.roles,
          dob: user.dob
        }).then(() => {
          toast.success('INSERTED')
          // console.log('INSERTED')
        }).catch((error) => {
          toast.error('Error :: ' + error)
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

  showPassword = (event) => {
    if (event.target.id === "pass") { this.setState({ showPassword: !this.state.showPassword }) }
    if (event.target.id === "confirmpass") { this.setState({ showConfirmPass: !this.state.showConfirmPass }) }
  }

  handleDOB = (date) => { this.setState({ dob: date }) }

  render() {
    return (
      <div className="App">
        <header className="Register-header">
          <div className="register-text">नोंदणी
            <div className="form-class">
              <div className="text-box-wrapper">
                <label><i className="fa fa-exclamation-circle" style={{ fontSize: "30px" }}></i> सर्व फील्ड अनिवार्य आहेत. हा फॉर्म इंग्रजी मधेच भरता येईल.</label>
              </div>
              <div className="text-box-wrapper">
                <input id="fname" type="text" value={this.state.fname} placeholder="वापरकर्ताचे प्रथम नाव"
                  onChange={this.handleChange} required />
              </div>
              <div className="text-box-wrapper">
                <input id="lname" type="text" value={this.state.lname} placeholder="वापरकर्ताचे आडनाव"
                  onChange={this.handleChange} required />
              </div>
              <div className="text-box-wrapper">
                <label id="dob" className="dob-label">वापरकर्त्याची जन्म तारीख</label>
                <DatePicker className="dob" onChange={this.handleDOB} value={this.state.dob} />
              </div>
              <div className="text-box-wrapper">
                <input id="uname" type="text" value={this.state.uname} placeholder="वापरकर्तानाव ( username )"
                  onChange={this.handleChange} required />
              </div>
              <div className="text-box-wrapper">
                <input id="email" type="text" value={this.state.email} placeholder="ईमेल"
                  onChange={this.handleChange} required />
              </div>
              <div className="text-box-wrapper">
                <input id="password" type={this.state.showPassword ? "text" : "password"} value={this.state.password}
                  placeholder="पासवर्ड" onChange={this.handleChange} required />
                {this.state.showPassword
                  ? <i id="pass" className="fas fa-eye eye-icon" onClick={this.showPassword}></i>
                  : <i id="pass" className="fas fa-eye-slash eye-icon" onClick={this.showPassword}></i>
                }
              </div>
              <div className="text-box-wrapper">
                <input id="confirm" type={this.state.showConfirmPass ? "text" : "password"} value={this.state.confirmPass}
                  placeholder="कन्फर्म पासवर्ड" onChange={this.handleChange} required />
                {this.state.showConfirmPass
                  ? <i id="confirmpass" className="fas fa-eye eye-icon" onClick={this.showPassword}></i>
                  : <i id="confirmpass" className="fas fa-eye-slash eye-icon" onClick={this.showPassword}></i>
                }
              </div>
              <CheckboxGroup name="fruits" value={this.state.roles} onChange={this.setRoles}>
                {(Checkbox) => (
                  <>
                    <label><Checkbox value="teacher" /> शिक्षक</label>
                    <label><Checkbox value="student" /> विद्यार्थी</label>
                    <label><Checkbox value="parent" /> पालक</label>
                  </>
                )}
              </CheckboxGroup>
              <button className="button"
                style={{ verticalAlign: "middle" }}
                onClick={this.handleSubmit}
              ><span>नोंदणी करा </span></button>
            </div>
          </div>
          <ToastContainer />
        </header>
      </div>
    );
  }
}

export default Register;