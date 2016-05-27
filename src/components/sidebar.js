import React, {Component} from 'react';
import MenuItem from './menuitem.js';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var barStyle = {
      width: '100%',
      minHeight: '200px',
      backgroundColor: this.props.color.primary,
      boxShadow: '0 3px 15px 1px #777',
    },
    barHeading = {
      height: '80px',
      backgroundColor: this.props.color.secondary,
      color: this.props.color.textLight,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    listItemStyle = {
      padding: '0'
    },
    iconStyle = {
      height: '80px',
      width: '100%',
      color: this.props.color.primary,
      fontSize: "60px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boss = {
      textShadow: '1px 1px 10px 1px ' + this.props.color.five
    }
    var listItems = this.props.content.map((el, idx) => {
      return (
        <MenuItem color={this.props.color} title={el.title} value={el.value} />
      )
    });

    return (
      <div style={barStyle}>
        <div style={barHeading}>
          <span style={iconStyle} className={'fa ' + this.props.icon}></span>
          <h5 style={boss}>{this.props.title}</h5>
        </div>
        <div style={listItemStyle}>
          <ul>
          {listItems}
          </ul>
        </div>
      </div>
    );
  }
}
