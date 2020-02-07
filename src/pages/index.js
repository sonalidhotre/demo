import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Alphabets from './alphabets';
import Colors from './Colors';
import ColorsQuiz from './ColorsQuiz';
import Index from './ContentIndex';
import EngAlphabets from './EnglishAlphabets';
import EngNumbers from './EnglishNumbers';
import Footer from './Footer';
import Home from './home';
import Login from './Login';
import HMenu from './menu';
import Numbers from './numbers';
import Register from './Register';
import Shapes from './Shapes';
import ShapesQuiz from './ShapesQuiz';
import Quiz from './Quiz';
import Profile from './Profile';

class Pages extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hMenu: true,
      showLogin: true
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <HMenu history={this.props.history}></HMenu>
          {/* <button type="button" className="login-logout-button" onClick={this.handleLoginLogout}>
            {this.state.showLogin ? <Link to="/login">Login</Link> : 'Logout' }
          </button> */}
          <div className="content-wrap">
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contentIndex" component={Index} />
            <Route path="/colors" component={Colors} />
            <Route path="/colorsQuiz" component={ColorsQuiz} />
            <Route path="/shapes" component={Shapes} />
            <Route path="/shapesQuiz" component={ShapesQuiz} />
            <Route path="/alphabets" component={Alphabets} />
            <Route path="/numbers" component={Numbers} />
            <Route path="/engAlpha" component={EngAlphabets} />
            <Route path="/engNumbers" component={EngNumbers} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}

export default Pages;
