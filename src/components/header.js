import React, {Component} from 'react';
import Logo from './logo.js';
import HeaderItem from './header-item.js';
import UxpassQuote from './uxpassquote.js';
import UserPanel from './userpanel.js';
import {Link} from 'react-router';
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      loginButtonState: localStorage.getItem('auth') == '' ? 'Login' : <UserPanel />
    }
  }
  render() {
    var headerStyle = {
      height: '60px',
      width: '100%',
      backgroundColor: this.props.color.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: "fixed",
      zIndex: "2000",
    },
    inputStyle = {
      borderRadius: '0',
      flex: '1.5',
    },
    uxLogo = {
      width: '75px',
      height: '80px',
      backgroundImage: 'url(/style/img/uxpasslightblue.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '65px 65px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    loginBub = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      marginRight: '20px',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      border: '2px solid #fff'
    },
    logoBub = {
      backgroundImage: 'url(/style/img/passlight.svg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      flex: '1',
      backgroundSize: '60px 60px',
      height: '70px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '12px',
      fontWeight: '600',
      paddingBottom: '10px'
    },
    annotationBub = {
      stroke: '#fff',
      strokeWidth: '2px',
      height: '65px',

    },
    downloadLink = {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      left: '70%',
      width: '20%',

    }
    return (
      <div style={headerStyle}>
          <HeaderItem
            linkTo=''
            title='Home'
            color={this.props.color}
            iconType='fa-home' />
            <div style={uxLogo}></div>
          <div style={loginBub} onClick={() => {this.loginOut()}}>
            {this.state.loginButtonState}
          </div>
      </div>
    );
  }
  loginOut() {
    var toke = localStorage.getItem('auth');

    if(toke) {
      localStorage.setItem('auth', '');
      window.location = window.location.origin;
    } else {
      window.location = window.location.origin + '/#/login'
    }
  }
  inputChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }
}
