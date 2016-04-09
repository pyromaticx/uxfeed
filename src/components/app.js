import React from 'react';
import { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
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
    };
    return (
      <div>
        <div style={appStyle}>
          <Header color={this.state.color}/>
        </div>
        <div style={contentWrapper}>
          {this.props.children}
        </div>
        <Footer color={this.props.route.color} />
      </div>
    );
  }
}
