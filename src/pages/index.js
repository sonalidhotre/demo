import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HMenu from './menu';
import Home from './home';
import Login from './Login';
import Register from './Register';
import Index from './ContentIndex';
import Colors from './Colors';
import Shapes from './Shapes';
import Alphabets from './alphabets';
import Numbers from './numbers';
import EngAlphabets from './EnglishAlphabets';
import EngNumbers from './EnglishNumbers';

class Pages extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hMenu: true,
      shouldLogin: true
    }
  }

  handleLoginLogout = () => {
    // this.setState({
    //   shouldLogin: !this.state.shouldLogin
    // })
  }

  render() {
    return (
      <Fragment>
        <Router>
          <HMenu isLoginButton={this.state.shouldLogin}></HMenu>
          <button type="button" className="login-logout-button" onClick={this.handleLoginLogout}>
            {this.state.shouldLogin ? <Link to="/login">Login</Link> : 'Logout'}
          </button>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contentIndex" component={Index} />
          <Route path="/colors" component={Colors} />
          <Route path="/shapes" component={Shapes} />
          <Route path="/alphabets" component={Alphabets} />
          <Route path="/numbers" component={Numbers} />
          <Route path="/engAlpha" component={EngAlphabets} />
          <Route path="/engNumbers" component={EngNumbers} />
        </Router>
      </Fragment>
    );
  }
}

export default Pages;
