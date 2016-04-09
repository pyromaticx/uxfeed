import React, {Component} from 'react';

export default class SpanItem extends Component {
  constructor() {
    super();
    this.state = {
      hovered: false
    }
  }
  render() {
    var spanItemStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '300px',
      width: '100%',
      textAlign: 'center',
      padding: '30px',
      boxSizing: 'border-box',
      backgroundColor: this.state.hovered == false ? this.props.color.primary : this.props.color.secondary,
      color: this.state.hovered == false ? this.props.color.text : this.props.color.textLight,
      transformStyle: 'preserve-3d',
      transform: this.state.hovered == false ? '' : 'rotate3d(2,2,2, 360deg)',
      transition: 'all 500ms ease-out'
    },
    spannerWrapper = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '300px',
      width: '100%',
      textAlign: 'center',
      padding: '0'
    }
    return (
      <div style={spannerWrapper} onMouseOver={() => {this.handleMouseOver()}} onMouseLeave={() => {this.handleMouseLeave()}}>
      <div style={spanItemStyle}>
        <h3>{this.props.title}</h3>
        <h5>{this.props.content}</h5>
      </div>
      </div>
    );
  }
  handleMouseOver() {
    this.setState({
      hovered: true
    });
  }
  handleMouseLeave() {
    this.setState({
      hovered: false
    })
  }
}
