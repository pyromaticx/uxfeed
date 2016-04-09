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
      borderBottom: '1px solid ' + this.props.color.tertiary
    },
    inputStyle = {
      width: '200px'
    };
    return (
      <div style={headerStyle}>
        <Link to='/'>
          <Logo
            color={this.props.color}
            height={headerStyle.height} />
          </Link>
        <HeaderItem
          height={headerStyle.height}
          color={this.props.color}
          icon='fa-hashtag'
          title='Check this out!' />
        <HeaderItem
          height={headerStyle.height}
          color={this.props.color}
          icon='fa-question-circle'
          title='Frequently Asked Questions' />
        <HeaderItem
          height={headerStyle.height}
          color={this.props.color}
          linkTo='login'
          icon='fa-sign-in'
          title='Login' />
        <input
          onChange={(event) => {this.inputChange(event)}}
          style={inputStyle}
          className='form-control'
          type='text'
          placeholder='🔎'
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
