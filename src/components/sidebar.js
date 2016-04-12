import React, {Component} from 'react';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    var content = props.content || []
    var listItems = content.map(function(el, idx) {
      return (
        <li key={idx}>{el} <span className="badge">4</span></li>
      )
    });
    this.state = {
      listItems: listItems
    }
  }
  render() {
    var barStyle = {
      width: '100%',
      minHeight: '500px',
      border: '1px solid ' + this.props.color.tertiary,
      backgroundColor: this.props.color.primary,
      boxShadow: '0 3px 15px 0.5px ' + this.props.color.textLight,
      borderRadius: "5px"
    },
    barHeading = {
      height: '40px',
      backgroundColor: this.props.color.secondary,
      color: this.props.color.textLight,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: "5px 5px 0 0"
    },
    listItemStyle = {
      padding: '20px 5px 5px 5px'
    },
    iconStyle = {
      marginTop: '3px',
      height: '20px',
      width: '20px',
      color: this.props.color.primary,
      fontSize: "18",
      lineHeight: "18px",
      marginRight: "10px"
    }


    return (
      <div style={barStyle}>
        <div style={barHeading}>
          <span style={iconStyle} className={'fa ' + this.props.icon}></span>
          <h5>{this.props.title}</h5>
        </div>
        <div style={listItemStyle}>
          <ul>
          {this.state.listItems}
          </ul>
        </div>
      </div>
    );
  }
}
