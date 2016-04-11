import React, {Component} from 'react';

export default class Logo extends Component {
  render() {
    var textStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: this.props.height,
      color: this.props.color.secondary
    };
    return (
      <div style={textStyles}>
        <h3>uxFeed.com</h3>
      </div>
    );
  }
}
