import React, {Component} from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }
  handleMouseOver() {
    this.setState({
      hovered: true
    });
  }
  handleMouseLeave() {
    this.setState({
      hovered: false
    });
  }
  render() {
    var menuItemStyle = {
      display: 'inline-flex',
      height: '50px',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 250ms ease',
      padding: '10px',
      backgroundColor: this.state.hovered ? this.props.color.five : this.props.color.primary,
      cursor: 'pointer',
      badge: {
        display: this.props.value > 0 ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: this.props.color.primary,
        height: '30px',
        width: '30px',
        justifyContent: 'center'
      }
    }
    return (
      <div onMouseOver={() => {this.handleMouseOver()}} onMouseLeave={() => {this.handleMouseLeave()}} style={menuItemStyle}>
        <span>{this.props.title}</span>
        <div style={menuItemStyle.badge}>
        {this.props.value}
        </div>
      </div>
    );
  }
}
