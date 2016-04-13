import React, {Component} from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var menuItemStyle = {
      display: 'inline-flex',
      height: '50px',
      width: '100%',
      alignItems: 'center',
      badge: {
        display: this.props.value > 0 ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: this.props.color.secondary,
        height: '30px',
        width: '30px'
      }
    }
    return (
      <div style={menuItemStyle}>
        <span>{this.props.title}</span>
        <div style={menuItemStyle.badge}>
        {this.props.value}
        </div>
      </div>
    );
  }
}
