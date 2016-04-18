import React, {Component} from 'react';
import Bubble from './loaderbubble.js';

export default class Loader extends Component {

  componentWillReceiveProps(oldProps, newProps) {

  }
  render() {

    var loaderWrapper = {
      height: '200px',
      width: '200px',
      display: this.props.annotations > 0 ? 'none': 'flex',
      alignItems: 'space-between',
      justifyContent: 'space-between',
      borderRadius: '50%'
    };

    return (
      <div style={loaderWrapper}>
        <Bubble show={this.props.annotations > 0 ? true : false} delay='100' color={this.props.color} />
        <Bubble show={this.props.annotations > 0 ? true : false} delay='200' color={this.props.color} />
        <Bubble show={this.props.annotations > 0 ? true : false} delay='300' color={this.props.color} />
        <Bubble show={this.props.annotations > 0 ? true : false} delay='400' color={this.props.color} />
        <Bubble show={this.props.annotations > 0 ? true : false} delay='500' color={this.props.color} />

      </div>
    );
  }
}
