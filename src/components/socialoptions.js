import React, {Component} from 'react';

export default class SocialOptions extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  postFacebook() {
    /*
    method: 'feed',
        name: 'Facebook Dialogs',
        link: 'https://developers.facebook.com/docs/dialogs/',
        picture: 'http://fbrell.com/f8.jpg',
        caption: 'Reference Documentation',
        description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    */
    console.log(this.props.collection)
    FB.ui({
      method: 'feed',
      name: 'UxPass Collection',
      link: window.location.href,
      picture: JSON.parse(this.props.collection.annotations)[0].annotationMedia,
      caption: 'Caption Placeholder',
      description: 'These are some annotations that I collected!'
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
