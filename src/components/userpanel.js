import React, {Component} from 'react';
import EditProfile from './editprofile.js';
export default class UserPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelOpen: false,
      user: this.props.user,
      modal: false,
      editOpen: false
    };
  }
  togglePanel(event) {
    event.preventDefault();
    event.stopPropagation();
    if(this.state.panelOpen) {
      this.setState({
        panelOpen: false
      });
    } else {
      this.setState({
        panelOpen: true
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user
    });
  }
  render() {
    var bubbleStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '105%',
      height: '105%',
    },
    panelStyle = {
      display: this.state.panelOpen ? 'flex' : 'none',
      width: this.state.panelOpen ? '300px': '0px',
      height: this.state.panelOpen ? '200px': '0px',
      backgroundColor: 'rgba(0,0,0,0.5)',
      border: '3px solid #444',
      transition: 'all 3000ms ease',
      position: 'absolute',
      transform: 'translateX(-100%)',
      top: '70px',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      flexDirection: 'column',
      textAlign: 'left'
    },
    panelItem = {
      marginLeft: '20px',
      cursor: 'pointer'
    };


    return (
      <div style={bubbleStyle} onClick={(event) => {this.togglePanel(event)}}>
        {this.state.editOpen ? <EditProfile active={this.state.editOpen} switchCB={() => {this.editProfileSwitch()}}/> : ''}
        <h3>{this.state.user.userName.substring(0,1).toUpperCase()}</h3>
        <div style={panelStyle}>
          <h5 style={panelItem} id='gohome' onClick={(event) => {this.panelRouter(event)}}>Goto my Annotations</h5>
          <h5 style={panelItem} id='editpro' onClick={(event) => {this.panelRouter(event)}}>Edit my profile</h5>
          <h5 style={panelItem} id='logout' onClick={(event) => {this.panelRouter(event)}}>Log out</h5>
        </div>
      </div>
    );
  }
  panelRouter(event) {
    event.preventDefault();
    event.stopPropagation();
    switch (event.target.id) {
      case 'gohome': {
        window.location = window.location.origin + '/#/username/' + this.state.user.userName;
        break;
      }
      case 'editpro': {
        this.editProfileSwitch();
        break;
      }
      case 'logout' : {
        localStorage.auth = '';
        localStorage.user = '';
        window.location = window.location.origin
        break;
      }
      default: {
        alert('default');
        break;
      }

    }
  }
  editProfileSwitch() {
    if(this.state.editOpen == false) {
      this.setState({
        editOpen: true
      });
    } else {
      this.setState({
        editOpen: false
      });
    }
  }
}
