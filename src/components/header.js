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
      backgroundColor: this.props.color.primary,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderBottom: '1px solid ' + this.props.color.tertiary,
      padding: "0 16.5%",
      position: "fixed",
      zIndex: "100",
      boxShadow: "0px 1px 15px 2px #A8A8A8"
    },
    inputStyle = {
      width: '219px',
      marginRight: "10px"
    };
    return (
      <div style={headerStyle}>
        <Link to='/'>
          <Logo
            color={this.props.color}
            height={headerStyle.height} />
          </Link>
        <HeaderItem
          color={this.props.color}
          title='Full View' />
        <HeaderItem
          color={this.props.color}
          title='Min View' />
        <input
          onChange={(event) => {this.inputChange(event)}}
          style={inputStyle}
          className='form-control'
          type='text'
          placeholder='🔎  Search'
          value={this.state.searchValue}/>
      </div>
    );
  }
  inputChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }
}
