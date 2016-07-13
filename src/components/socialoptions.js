import React, {Component} from 'react';

export default class SocialOptions extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  postFacebook() {
    console.log(this.props.collection)

    var displayAnno = JSON.parse(this.props.collection.annotations)[0];
    console.log(displayAnno);
    if(displayAnno.annotationMediaType == 'webm' || displayAnno.annotationMediaType == 'webcam') {
      FB.ui({
          method: 'feed',
          name: 'UxPass Collection',
          link: window.location.href,
          source: displayAnno.annotationMedia,
          caption: 'Caption Placeholder',
          description: 'These are some annotations that I collected!'
        }, function(response){
          console.log(response)
        });
    } else {
        FB.ui({
            method: 'feed',
            name: 'UxPass Collection',
            link: window.location.href,
            picture: displayAnno.annotationMedia,
            caption: 'Caption Placeholder',
            description: 'These are some annotations that I collected!'
          }, function(response){
            console.log(response)
          });
        }
  }
  postTwitter() {
    var tweet = 'text=These are some annotations from UxPass.com&url=' + encodeURIComponent(window.location.href) + '&hashtags=uxpass'
    window.open('https://twitter.com/intent/tweet?' + tweet, 'name', 'height=300,width=600');
  }
  postLinkedin() {
    var linkedinURL = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(window.location.href) + "&title=UxPass Collection&summary=This is just a placeholder&source=LinkedIn";
    window.open(linkedinURL, "name", 'height=520, width=570');

  }
  postPinterest() {
    var image = '' + JSON.parse(this.props.collection.annotations)[0].annotationMedia;
    PDK.pin(image, 'placeholder', window.location.href, function(res) {
      console.log(res);
    });
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
      case 'pinterest': {
        this.postPinterest();
      }
    }
  }
  render() {
    var socialWrapper = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: this.props.verticle ? 'column' : 'row',
      width: this.props.verticle ? '50px' : '100%'
    };
    return (
      <div style={socialWrapper}>
        <span id='twitter' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-twitter'></span>
        <span id='facebook' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-facebook'></span>
        <span id='linkedin' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-linkedin'></span>
        <span id='pinterest' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#bd081c'}} className='fa fa-pinterest'></span>
      </div>
    );
  }
}
