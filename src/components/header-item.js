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
      borderBottom: "1px solid" + (this.state.isHovered ? this.props.color.five : this.props.color.primary ),
      alignItems: 'center',
      justifyContent: 'center',
      height: this.props.height,
      transition: 'all 500ms ease'
    },
    titleStyle = {
      fontSize: '16px',
      color: this.props.color.textLight

    }

    return (
      <Link to={'/' + this.props.linkTo}>
        <div
          onMouseEnter={() => {this.mouseEnter()}}
          onMouseLeave={() => {this.mouseLeave()}}
          style={headerItemStyle}>
            <span style={titleStyle}>{this.props.title}</span>
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
