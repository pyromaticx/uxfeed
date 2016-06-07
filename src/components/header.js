import React, {Component} from 'react';
import Logo from './logo.js';
import HeaderItem from './header-item.js';
import UxpassQuote from './uxpassquote.js';
import {Link} from 'react-router';
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      loginButtonState: 'Login'
    }
  }
  render() {
    var headerStyle = {
      height: '60px',
      width: '100%',
      backgroundColor: this.props.color.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      position: "fixed",
      zIndex: "2000",
    },
    inputStyle = {
      borderRadius: '0',
      flex: '1.5',
    },
    uxLogo = {
      flex: '3',
      height: '80px',
      backgroundImage: 'url(/style/img/uxpasslightblue.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: '65px 65px'
    },
    bubbleBlock = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flex: '1',
    },
    greenBub = {
      backgroundImage: 'url(/style/img/annotategreen.svg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      fontSize: '16px',
      fontWeight: '600',
      padding: '5px',
      color: this.props.color.primary,
      textAlign: 'center',
    },
    orangeBub = {
      backgroundImage: 'url(/style/img/annotateorange.svg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      fontSize: '16px',
      fontWeight: '600',
      padding: '5px',
      color: this.props.color.primary,
      textAlign: 'center',
    },
    redBub = {
      backgroundImage: 'url(/style/img/annotatered.svg)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      fontSize: '16px',
      fontWeight: '600',
      padding: '5px',
      color: this.props.color.primary,
      textAlign: 'center',
    },
    bubbleText = {
      position: 'relative',
      top: '-3px'
    },
    loginBub = {
      backgroundImage: 'url(/style/img/annotationlight.svg)',
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

    }
    return (
      <div style={headerStyle}>
          <HeaderItem
            style={{flex: '2'}}
            linkTo=''
            title='Home'
            color={this.props.color}
            iconType='fa-home' />
            <div style={uxLogo}></div>
          <Link style={loginBub} to='/login'><div>{this.state.loginButtonState}</div></Link>
          <div style={logoBub}>

          </div>
      </div>
    );
  }
  inputChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }
}
