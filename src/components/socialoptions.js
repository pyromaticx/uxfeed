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
    var linkedinURL = "https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href + "&title=UxPass Collection&summary=This is just a placeholder&source=LinkedIn";
    window.open(linkedinURL, "name", 'height=520, width=570');
  /*  var payload = {
       "comment": "Check out developer.linkedin.com! http://linkd.in/1FC2PyG",
       "visibility": {
         "code": "anyone"
       }
     };
     function onLinkedInLoad() {
       IN.Event.on(IN, "auth", shareContent);
     }
     IN.API.Raw("/people/~/shares?format=json")
       .method("POST")
       .body(JSON.stringify(payload))
       .result((res) => {console.log(res)})
       .error((err) => {console.warn(err)});*/
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
      alignItems: 'center'
    };
    return (
      <div style={socialWrapper}>
        <meta property="og:title" content="Collection Title" />
        <meta property="og:image" content="http://ia.media-imdb.com/images/rock.jpg" />
        <span id='twitter' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-twitter'></span>
        <span id='facebook' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-facebook'></span>
        <span id='linkedin' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-linkedin'></span>
        <span id='pinterest' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-pinterest'></span>
      </div>
    );
  }
}
