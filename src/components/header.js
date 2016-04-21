import React, {Component} from 'react';
import Logo from './logo.js';
import HeaderItem from './header-item.js';
import {Link} from 'react-router';
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    }
  }
  render() {
    var headerStyle = {
      height: '60px',
      width: '100%',
      backgroundColor: this.props.color.secondary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: "space-between",
      padding: "0 10%",
      position: "fixed",
      zIndex: "100",
      boxShadow: '0 3px 15px 1px ' + this.props.color.five,
    },
    inputStyle = {
      width: '300px'
    };
    return (
      <div style={headerStyle}>
        <Link to='/'>
          <Logo
            color={this.props.color}
            height={headerStyle.height} />
          </Link>
        <input
            onChange={(event) => {this.inputChange(event)}}
            style={inputStyle}
            className='form-control'
            type='text'
            placeholder='🔎  Search'
            value={this.state.searchValue}/>
        <HeaderItem
          color={this.props.color}
          icon="fa-user" />
        <HeaderItem
          color={this.props.color}
          icon="fa-users" />
        <HeaderItem
            color={this.props.color}
            icon="fa-globe" />
        <HeaderItem
            color={this.props.color}
            icon="fa-chevron-down" />
      </div>
    );
  }
  inputChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }
}
