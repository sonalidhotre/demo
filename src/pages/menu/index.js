import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import { Link, withRouter } from "react-router-dom";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class MenuWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {
    const sideChanged = this.props.children.props.right !== nextProps.children.props.right;

    if (sideChanged) {
      this.setState({ hidden: true });

      setTimeout(() => {
        this.show();
      }, this.props.wait);
    }
  }

  show() {
    this.setState({ hidden: false });
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = { display: 'none' };
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: 'slide',
      side: 'left'
    };
  }

  logout = () => {
    cookies.remove('thisuser')
    cookies.set('login', false, { path: "/" })
    const { history } = this.props;
    history.push("/")
  }

  getMenu() {
    const Menu = BurgerMenu['slide'];

    let thisuser = cookies.get('thisuser')
    let isLogin = cookies.get('login');

    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={'slide'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={this.state.side === 'right'}>
          <ul>
            <li><Link key="0" to="/"><i className="fa fa-fw" /><span>मुख्यपृष्ठ</span></Link></li>
            <li><Link key="2" to="/register"><i className="fa fa-fw" /><span>नोंदणी</span></Link></li>
            {isLogin === "true" &&
              <li><Link key="3" to="/profile"><i className="fa fa-fw" />
                <span>प्रोफाइल ( Profile )</span></Link></li>}
            {isLogin === "true" &&
              <li><Link key="3" to="/contentIndex"><i className="fa fa-fw" /><span>अनुक्रमणिका</span></Link></li>}
            {(isLogin === "true" && thisuser && thisuser.roles && thisuser.roles[0] === "teacher") &&
              <li><Link key="1" to="/quiz"><i className="fa fa-fw" /><span>प्रश्नोत्तरी ( Quiz )</span></Link></li>}
            {isLogin === "true" ?
              <li><span onClick={this.logout}>लॉगआउट</span></li> :
              <li><Link key="1" to="/login"><i className="fa fa-fw" /><span>लॉगिन</span></Link></li>}
          </ul>
        </Menu>
      </MenuWrap>
    );
  }

  render() {
    return (
      <div id="outer-container" style={{ height: '100%' }}>
        {this.getMenu()}
      </div>
    );
  }
}

export default withRouter(Demo)