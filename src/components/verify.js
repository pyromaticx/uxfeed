import React, {Component} from 'react';
import api from './api/api.js';
export default class Verify extends Component {
  constructor() {
    super();
    this.state = {
      verification: "",
    }
  }
  componentDidMount() {
    api.verifyEmail(this.props.params.uuid).done((resp) => {
      if(resp.success) {
        this.setState({
          verification: "Thanks! You are being redirected to login..."
        });
        setTimeout(() => {
          window.location.hash = '/login';
        }, 3000)
      } else {
        this.setState({
          verification: "Verification failed."
        });
      }
    })
  }
  render() {
    var verifyWrapper = {
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
    return(
      <div style={verifyWrapper}>
        {this.state.verification}
      </div>

    );
  }
}
