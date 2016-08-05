import React, {Component} from 'react';
import ModalGeneric from './modal-generic.js';
import api from './api/api.js';
import PDFPreview from './pdfpreview.js';
export default class SocialOptions extends Component {
  constructor() {
    super();
    this.state = {
      modalState: false,
      modalContent: '',
      modalBody: '',
      modalTitle: '',
      attachPDF: false,
      pdfPreview: false
    }
  }
  closeModal() {
    this.setState({
      modalContent: '',
      modalState: false
    });
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
  shareEmail() {
    console.log(this.props.collection)
    var sendEmail = () => {
      this.setState({
        modalTitle: (<h5>Sending email...</h5>),
        modalBody: ''
      }, () => {
        var attachmentFiles = JSON.parse(this.props.collection.annotations).map((annotation, idx) => {
          return {
            filename: "Annotation Media " + idx + annotation.annotationMedia.substr(annotation.annotationMedia.lastIndexOf('.'), annotation.annotationMedia.length),
            path: annotation.annotationMedia
          }
        });
        var recipients = this.state.emailList.split("\n");
        var sender = this.props.user.userFirstName + " " + this.props.user.userLastName;
        var urlTarget = window.location.href

        api.sendShareEmail({
          emailTo: recipients.toString(),
          sender: sender,
          urlTarget: urlTarget,
          attachmentFiles: this.state.attachPDF ? [{filename: this.props.collection.fileName + ".pdf", path: this.props.collection.exportURI}] : attachmentFiles
        }).done((resp) => {
          console.log(resp);
          if(resp == 'OK') {
            this.setState({
              modalTitle: (<h5>Success!!</h5>),
              modalBody: ''
            });
            setTimeout(() => {this.closeModal()}, 2500);
          }
        })
      });
    }
    var updateEmailValues = (event) => {
      this.setState({
        emailList: event.target.value
      });
    }
    this.setState({
      modalState: true,
      modalTitle: (<div><h5>Sharing Collection:</h5><br /><h5>{this.props.collection.fileName}</h5></div>),
      modalBody: (
        <div style={{width: '100%', height: '100%', marginTop: '20px'}}>
          <textarea onChange={(event) => {updateEmailValues(event)}} type="textbox" rows='3' placeholder="Enter addresses one per line" style={{width:'100%'}}></textarea>
          <span>
            <input type='checkbox' onChange={(event => {this.checkBoxUpdate(event)})} />
            <span>Attach PDF file</span>
            <span style={{color: '#333', textDecoration: 'none'}} onClick={() => {window.open(this.props.collection.exportURI, "_blank")}}>
              <span style={{marginLeft: '10px', cursor: 'pointer'}} className='fa fa-file-pdf-o'></span>
              <span>Preview</span>
            </span>
          </span>
          <br />
          <button type="button" className='btn btn-success' onClick={() => {sendEmail()}}>Send</button>
        </div>
      ),
    });
  }

  checkBoxUpdate(event) {
    this.setState({
      attachPDF: event.target.checked
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
        break;
      }
      case 'email': {
        this.shareEmail();
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
        {this.state.modalState ? <ModalGeneric close={() => {this.closeModal()}} title={this.state.modalTitle} content={this.state.modalBody} /> : ''}
        {this.state.pdfPreview ? <PDFPreview collection={this.props.collection} /> : ""}
        <span id='twitter' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-twitter'></span>
        <span id='facebook' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-facebook'></span>
        <span id='linkedin' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#00aced'}} className='fa fa-linkedin'></span>
        <span id='pinterest' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#bd081c'}} className='fa fa-pinterest'></span>
        <div href="//www.reddit.com/submit" target="_blank" onClick={() => {window.location = "http://www.reddit.com/submit?url=" + encodeURIComponent(window.location); return false;}}>
          <img src="//www.redditstatic.com/spreddit1.gif" alt="submit to reddit" border="0" />
        </div>
        <span id='email' onClick={(event) => {this.handleClick(event)}} style={{fontSize: '20px', color: '#bd081c'}} className='fa fa-envelope'></span>
      </div>
    );
  }
}
