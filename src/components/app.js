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
  setColors(colorObj) {
    this.setState({
      color: colorObj
    });
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
      paddingTop: '80px'
    };

    return (
      <div>
        <div style={appStyle}>
          <Header color={this.state.color}/>
        </div>
        <div style={contentWrapper}>
          {React.cloneElement(this.props.children, { color: this.state.color })}
        </div>
        <Footer color={this.state.color} colorChanger={(choice) => {this.props.route.colorChanger(choice, this.setColors.bind(this))}}/>
      </div>
    );
  }
}
