import React, {Component} from 'react';
import {Link} from 'react-router';
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
      paddingBottom: "5px",
      color: this.state.isHovered ? this.props.color.five : this.props.color.primary,
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 500ms ease',
      textDecoration: 'none',
      width: '200px'
    },
    titleStyle = {
      fontSize: '25px',
      color: this.props.color.textLight
    },
    titleText = {
      fontFamily: 'Quicksand',
      fontWeight: '800'
    }

    return (
      <Link to={'/' + this.props.linkTo}>
        <div
          onMouseEnter={() => {this.mouseEnter()}}
          onMouseLeave={() => {this.mouseLeave()}}
          style={headerItemStyle}>
            <span style={titleStyle} className={'fa ' + this.props.iconType}><span style={titleText}>{this.props.title}</span></span>
        </div>
      </Link>
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
