import React, {Component} from 'react';
import api from './api/api.js';
import {Router, Route, Link, BrowserHistory, IndexRoute} from 'react-router';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
        username: '',
        password: ''
    }
  }
  render() {
    var loginWrapper = {
      display: 'flex',
      height: '100%',
      width: '100%',
      minWidth: '250px',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px',
    },
    loginDialog = {
      height: '400px',
      width: '40%',
      backgroundColor: this.props.route.color.primary,
      border: '1px solid ' + this.props.route.color.tertiary,
      display: 'flex',
      alignItems: 'space-between',
      justifyContent: 'space-between',
      flexDirection: 'column'
    },
    header = {
      backgroundColor: this.props.route.color.secondary,
      height: '40px',
      width: '100%',
      color: this.props.route.color.textLight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    formStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'space-between',
      flexDirection: 'column',
      padding: '30px'
    },
    googleButton = {}
    return (
      <div style={loginWrapper}>
        <div style={loginDialog}>
          <div style={header}>
            <span>Login</span>
          </div>
          <div style={formStyle}>
            <label htmlFor='username'>Enter Username</label>
            <input onChange={(event) => {this.userChange(event)}} type='text' name='username' value={this.state.username} />
            <label htmlFor='pass'>Enter Password</label>
            <input onChange={(event) => {this.passChange(event)}} type='password' name='pass' value={this.state.password} />
          </div>
          <button type='button' onClick={(event) => (this.submitCreds(event))} className='btn btn primary'>Login</button>
        </div>
      </div>
    );
  }
  userChange(event) {
    this.setState({
      username: event.target.value
    });
    if(event.keyCode == 13) {
      this.submitCreds();
    }
  }
  passChange(event) {
    this.setState({
      password: event.target.value
    });
    if(event.keyCode == 13) {
      this.submitCreds();
    }
  }
  submitCreds(event) {
    if(this.state.username.length < 1 || this.state.password.length < 1) {
      return;
    }
    api.login(this.state.username, this.state.password).done((userData) => {
      //this.props.updateUser(userData);
      var data = JSON.parse(userData);
      api.setToken(data.token);
      console.log(data.token);
      document.cookie = "userData=" + userData;
      window.location.hash = '#/username/' + this.state.username;
    })
  }
}
