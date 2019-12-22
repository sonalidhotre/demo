import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HMenu from './menu';
import Home from './home';
import Login from './Login';
import Register from './Register';

class Pages extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hMenu: true
    }
  }

  render() {
    return (
      <Router>
        {/* <Home></Home> */}
        <HMenu></HMenu>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    );
  }
}

export default Pages;
