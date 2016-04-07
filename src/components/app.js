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
    };
    return (
      <div>
        <div style={appStyle}>
          <Header color={this.state.color}/>
        </div>
        {this.props.children}
        <Footer color={this.props.route.color} />
      </div>
    );
  }
}
