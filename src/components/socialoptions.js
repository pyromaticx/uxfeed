import React, {Component} from 'react';

export default class SocialOptions extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  postFacebook() {

  }
  postTwitter() {
    var tweet = 'text=These are some annotations from UxPass.com&url=' + (window.location.href) + '&hashtags=uxpass'
    window.open('https://twitter.com/intent/tweet?' + tweet, 'name', 'height=300,width=600');
  }
  postLinkedin() {

  }
  handleClick(event) {
    switch(event.target.id) {
      case 'facebook': {
        this.postFacebook();
        break;
      }
      case 'twitter': {
        this.postTwitter();
        break;
      }
      case 'linkedin': {
        this.postLinkedin();
        break;
      }
    }
  }
  render() {

    return (
      <div>
        <span id='twitter' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-twitter'></span>
        <span id='facebook' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-facebook'></span>
        <span id='linkedin' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-linkedin'></span>
      </div>
    );
  }
}
