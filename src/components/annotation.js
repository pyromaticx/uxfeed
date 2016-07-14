import React, {Component} from 'react';
import moment from 'moment';
import UserComment from './usercomment.js';
import api from './api/api.js';
export default class Annotation extends Component {
    resizeListener
    constructor(props) {
        super(props);
        this.state = {
            height: 80,
            expanded: props.expanded,
            modalState: 'closed',
            selected: false,
            playing: false,
            hover: false,
            deleted: false
        }
    }
    componentWillReceiveProps(newProps) {
    if(newProps.expanded != this.props.expanded) {
        this.setState({
          expanded: newProps.expanded
        });
      }
    }
    handleHover(type) {
      if(type == 'enter') {
        this.setState({
          hover: true
        });
      } else {
        this.setState({
          hover: false
        });
      }
    }
    playBoth(event) {
      var vidz = document.getElementsByClassName(this.props.annotation.annotationId);
      var vids = [];
      for(var i = 0; i < vidz.length; i++) {
        vids.push(vidz[i]);
      }
      console.log(vids);
      if(this.state.playing) {
        vids.forEach(function(el) {
          el.pause();
        });
        this.setState({
          playing: false
        });
      } else {
        vids.forEach(function(el) {
          el.play();
        });
        this.setState({
          playing: true
        });
      }
    }
    annotationTypeSwitch() {
      switch (this.props.annotation.annotationMediaType) {
        case 'jpeg': {
          return (
            <img src={this.props.annotation.annotationMedia} width='100%' height='auto'/>
          );
        }
        case 'webm': {
          return (
            <video src={this.props.annotation.annotationMedia} controls width='100%' height='auto'/>
          );
        }
        case 'webcam': {
          return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
              <video className={this.props.annotation.annotationId} src={this.props.annotation.annotationMedia} width='100%' />
              <video style={{position: 'relative', left: '10px', top: '-100px'}} className={this.props.annotation.annotationId} src={this.props.annotation.userVideo} width='30%' />
              <button className='btn btn-success' type='button' onClick={(event) => {this.playBoth(event)}}>{this.state.playing ? 'Pause' : 'Play'}</button>
            </div>
          );
        }
        case 'audio': {
          return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column'}}>
              <img src={this.props.annotation.annotationMedia} width='100%' height='auto'/>
              <audio controls src={this.props.annotation.annotationMediaAudio} />
            </div>
          );
        }
        default: {

        }
      }

    }
    colorByType(type) {
      switch(type) {
        case 'UX Pro':
          return 'red';
          break;
        case 'User':
          return 'green';
          break;
        case 'Product Team':
          return 'yellow';
          break;
        case 'UI Pro':
          return 'orange';
          break;
        case 'Customer':
          return 'blue';
          break;
       default:
         return '#333'
      }
    }

    emojiPicker(emoji) {
        var type;
        switch (emoji) {
            case 'delighted': {
                return 'https://s3-us-west-2.amazonaws.com/uxpattach/delighted.png'
            }
            case 'annoyed': {
                return 'https://s3-us-west-2.amazonaws.com/uxpattach/annoyed.png'
            }
            case 'idea': {
                return 'https://s3-us-west-2.amazonaws.com/uxpattach/idea.png'
            }
            case 'thinking': {
                return 'https://s3-us-west-2.amazonaws.com/uxpattach/thinking.png'
            }
            case 'aghast': {
                return 'https://s3-us-west-2.amazonaws.com/uxpattach/aghast.png'
            }
            case 'disappointed': {
                return 'https://s3-us-west-2.amazonaws.com/uxpattach/disappointedEmo.png'
            }
            case 'angry': {
                return 'https://s3-us-west-2.amazonaws.com/uxpattach/angryEmo.png'
            }
            default: {
                return '';
            }
        }
    }
    deleteAnnotation() {
      if(confirm('Are you sure that you want to delete this annotation?')) {
        api.deleteAnnotation(this.props.annotation.annotationId).done((resp) => {
          if(resp.status) {
            this.setState({
              deleted: true
            });

          }
          setTimeout(this.props.refresh, 0);
        });
      }
    }
    render() {

        var annotationWrapper = {
                width: '100%',
                minHeight: this.state.expanded ? '150px' : '80px',
                backgroundColor: 'transparent',
                display: this.state.deleted == true ? 'none' : 'flex',
                flexDirection: 'column',
                justifyContent: this.state.expanded ? 'space-between' : 'center',
                alignItems: 'center',
                padding: '0',
                marginBottom: '25px',
                boxShadow: '0 3px 15px 1px #777',
                overflow: 'hidden',
                border: this.props.selected === false ? '' : '3px solid ' + this.props.color.five
            },
            thumbnailStyle = {
                display: this.state.expanded ? '' : 'none',
                height: "100%",
                width: '100%',
                minHeight: '200px'
            },
            textRow = {
                display: 'flex',
                width: '100%',
                alignItems: 'center'
            },
            userInfo = {
                fontSize: "14px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                flex: '8',
                titleColor: {
                    color: "#333"
                }
            },
            mainComment = {
                display: this.state.expanded ? 'inline-flex' : 'none',
                span: {
                    fontWeight: 'bold',
                    color: this.props.color.five,
                    paddingRight: '5px'
                },
                flex: 1,
                alignItems: 'center',
                paddingLeft: '20px'
            },
            annotationFooterStyle = {
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'space-around',
                width: '100%',
                minHeight: '50px',
                backgroundColor: this.colorByType(this.props.annotation.annotationType),
                textShadow: '0 0 3px #333',
                fontWeight: '700'
            },
            footerLeft = {
              backgroundImage: 'url(/style/img/annotationlight.svg)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              flex: '1',
              backgroundSize: '60px 60px',
              height: '70px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#fff',
              fontSize: '12px',
              fontWeight: '600',
              paddingBottom: '10px',
              typeStyle: {
                color: '#fff',
                marginTop: '30px',
                fontWeight: 700,

              }
            },
            annotationContent = {
              display: 'flex',
              flex: '2',
              borderLeft: '2px solid #fff',
              backgroundColor: 'transparent',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: '700',
            },
            emojiStyle = {
                display: 'flex',
                flex: '1',
                height: '50px',
                width: '40px',
                fontSize: '30px',
                justifyContent: 'center',
                backgroundImage: 'url(' + this.emojiPicker(this.props.annotation.emoji) + ')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            },
            userCommentStyle = {
              display: 'inline-flex',
              width: '100%',
              minHeight: '40px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              commentUser: {
                paddingRight: '5px',
                fontWeight: 'bold',
                color: this.props.color.five
              }
            },
            annotationPanel = {
              minHeight: '100px',
              width: '100%',
              backgroundColor: '#f9f9f9',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            },
            annoTools = {
              display: this.state.hover ? 'flex' : 'none',
              position: 'absolute',
              left: '80%',
              width: '30px',
              marginTop: '20px',
              textAlign: 'center',
              fontSize: '30px',
              color: 'red'
            };

      /*  var currentComments = typeof this.props.annotation.comments == 'object' ? this.props.annotation.comments : [];
        var Comments = currentComments.map((comment) => {
          return (
            <div style={userCommentStyle}>
              <span style={userCommentStyle.commentUser}>{comment.username + ':'}</span>
              <span>{comment.comment}</span>

            </div>
          ); */


        return (
            <div onMouseOver={() => {this.handleHover('enter')}} onMouseLeave={() => {this.handleHover('leave')}} onClick={() => {this.addToCollection()}}style={annotationWrapper}>

                <div style={thumbnailStyle}>
                    <span style={annoTools} className='fa fa-trash' onClick={() => {this.deleteAnnotation()}}></span>
                    {this.annotationTypeSwitch()}
                </div>
                <div style={annotationPanel}>
                  <div style={{width: '75%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <span style={{color: '#333', fontWeight: 700}}>Title:<span style={{color: '#333', fontWeight: 400, marginLeft: '10px'}}>{this.props.annotation.annotationTitle}</span></span>
                    <span style={{color: '#333', fontWeight: 700}}>Description:<span style={{color: '#333', fontWeight: 400, marginLeft: '10px'}}>{this.props.annotation.annotationText}</span></span>
                  </div>
                  <div style={{width: '10%', height: '100%'}}>

                    {this.props.annotation.emojiId != '' ? <img src={this.emojiPicker(this.props.annotation.emojiId)} width='100%' /> : ''}
                  </div>
                </div>
                <div style={annotationFooterStyle}>
                    <div style={mainComment}>
                      <img src='/style/img/annotationWhite.svg' width='35' />
                      <span style={footerLeft.typeStyle}>{this.props.annotation.annotationType}</span>
                    </div>
                    <div style={annotationContent}>
                      <span style={{color: '#fff', fontWeight: 700}}>{this.props.annotation.annotationTitle}</span>
                    </div>
                </div>
            </div>
        );
    }
    addToCollection() {
      if(this.props.addToCollection(this.props.annotation)) {
        this.setState({
          selected: true
        });
      } else {
        this.setState({
          selected: false
        });
      }
    }
    openModal(event) {
      if(event) {
        event.stopPropagation();
      }
      this.setState({
        modalState: this.state.modalState == 'open' ? 'closed' : 'open'
      });
    }
    expandAnnotation() {
        var current = !this.state.expanded;
        this.setState({
            expanded: current,
            height: current == true ? '300' : '80',

        });
    }
    truncate(str) {
        if(str.length >= 30) {
            return str.substring(0, 29) + '...';
        } else {
            return str;
        }
    }
}
