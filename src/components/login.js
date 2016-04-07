import React, {Component} from 'react';

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
            <div style={googleButton} className="g-signin2" data-onsuccess="onSignIn"></div>
          </div>
        </div>
      </div>
    );
  }
  userChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  passChange(event) {
    this.setState({
      password: event.target.value
    });
  }
}
