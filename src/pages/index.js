import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HMenu from './menu';
import Home from './home';
import Login from './Login';
import Register from './Register';
import Index from './ContentIndex';
import Colors from './Colors';
import Shapes from './Shapes';
import Alphabets from './alphabets';

class Pages extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hMenu: true
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <HMenu></HMenu>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contentIndex" component={Index} />
          <Route path="/colors" component={Colors} />
          <Route path="/shapes" component={Shapes} />
          <Route path="/alphabets" component={Alphabets} />
        </Router>
      </Fragment>
    );
  }
}

export default Pages;
