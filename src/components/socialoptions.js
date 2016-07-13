import React, {Component} from 'react';

export default class SocialOptions extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  postFacebook() {
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.image',
      action_properties: JSON.stringify({
        object: window.location.href
      })
      }, function(response){
        console.log(response)
      });
  }
  postTwitter() {
    var tweet = 'text=These are some annotations from UxPass.com&url=' + encodeURIComponent(window.location.href) + '&hashtags=uxpass'
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
    var socialWrapper = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    };
    return (
      <div style={socialWrapper}>
        <meta property="og:title" content="Collection Title" />
        <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
        <span id='twitter' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-twitter'></span>
        <span id='facebook' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-facebook'></span>
        <span id='linkedin' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-linkedin'></span>
      </div>
    );
  }
}
