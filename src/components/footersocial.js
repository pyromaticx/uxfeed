import React, {Component} from 'react';

export default class FooterSocial extends Component {
  constructor() {
    super();
  }
  render() {
    var socialWrapper = {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    iconStyle = {
      color: this.props.color.textLight,
      fontSize: '60px',
    }
    return (
      <div style={socialWrapper}>
        <span onClick={(event) => {this.handleClick(event)}} className='fa fa-facebook' style={iconStyle} data-link='http://www.facebook.com'></span>
        <span onClick={(event) => {this.handleClick(event)}} className='fa fa-twitter' style={iconStyle} data-link='http://www.twitter.com'></span>
        <span onClick={(event) => {this.handleClick(event)}} className='fa fa-linkedin' style={iconStyle} data-link='http://www.linkedin.com'></span>
        <span onClick={(event) => {this.handleClick(event)}} className='fa fa-pinterest' style={iconStyle} data-link='http://www.pinterest.com'></span>
        <span onClick={(event) => {this.handleClick(event)}} className='fa fa-github' style={iconStyle} data-link='http://www.github.com'></span>
      </div>
    );
  }
  handleClick(event) {
    window.open(event.target.dataset.link);
  }
}
