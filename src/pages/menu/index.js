import React, { Component } from 'react';
import BurgerMenu from 'react-burger-menu';
import { Link } from "react-router-dom";
import './menu.css';

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

  getMenu() {
    const Menu = BurgerMenu['slide'];

    return (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={'slide'} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right={this.state.side === 'right'}>
          <ul>
            <li><Link key="0" to="/"><i className="fa fa-fw" /><span>Home</span></Link></li>
            <li><Link key="1" to="/login"><i className="fa fa-fw" /><span>Login</span></Link></li>
            <li><Link key="2" to="/register"><i className="fa fa-fw" /><span>Register</span></Link></li>
            <li><Link key="3" to=""><i className="fa fa-fw" /><span>Comments</span></Link></li>
            <li><Link key="4" to=""><i className="fa fa-fw" /><span>Analytics</span></Link></li>
            <li><Link key="5" to=""><i className="fa fa-fw" /><span>Reading List</span></Link></li>
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

export default Demo