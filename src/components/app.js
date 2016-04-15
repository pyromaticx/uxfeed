import React from 'react';
import { Component } from 'react';
import Header from './header.js';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.route.color
    }
  }
  render() {
    var appStyle = {
      display: 'flex',
    },
    contentWrapper = {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100%',
      paddingTop: "80px"
    };
    return (
      <div>
        <div style={appStyle}>
          <Header color={this.state.color}/>
        </div>
        <div style={contentWrapper}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
