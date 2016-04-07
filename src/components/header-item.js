import React, {Component} from 'react';

export default class HeaderItem extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    }
  }
  render() {
    var headerItemStyle = {
      display: 'flex',
      padding: '10px 5px 5px 5px',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '3px solid ' + (this.state.isHovered ? this.props.color.secondary : this.props.color.tertiary ),
      transition: 'all 250ms ease',
      height: this.props.height,
      transition: 'all 250ms ease'
    },
    titleStyle = {
      fontSize: '14px',
      color: this.props.color.text,

    },
    iconStyle = {
      marginTop: '3px',
      height: '20px',
      width: '20px',
      color: this.props.color.secondary
    }

    return (
      <div
        onMouseEnter={() => {this.mouseEnter()}}
        onMouseLeave={() => {this.mouseLeave()}}
        style={headerItemStyle}>
          <span style={iconStyle} className={'fa ' + this.props.icon}></span>
          <span style={titleStyle}>{this.props.title}</span>
      </div>
    );
  }
  mouseEnter() {
    this.setState({
      isHovered: true
    });
  }
  mouseLeave() {
    this.setState({
      isHovered: false
    });
  }
}
