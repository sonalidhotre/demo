import React, { Component } from 'react';
import './App.css';
import Pages from './pages';

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hMenu: true
    }
  }

  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyBs3t9219scATJpX5OcBK2KF57qC7Ky1Vs",
      authDomain: "fir-b1d21.firebaseapp.com",
      databaseURL: "https://fir-b1d21.firebaseio.com",
      projectId: "fir-b1d21",
      storageBucket: "fir-b1d21.appspot.com",
      messagingSenderId: "447904395450",
      appId: "1:447904395450:web:1db76a8f814afe5ab15283",
      measurementId: "G-S7DTXWLNBF"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // firebase.database().ref('users/1').set({
    //   uname: "uname",
    //   email: "uname@mail.com",
    //   password: "pass",
    //   roles: ["teacher"]
    // }).then(() => {
    //   console.log('INSERTED')
    // }).catch((error) => {
    //   console.error('Error :: ', error)
    // })
    // firebase.database().ref('users/count').set(1)
  }

  render() {
    return (
      <div className="App">
        <Pages></Pages>
      </div>
    );
  }
}

export default App;
