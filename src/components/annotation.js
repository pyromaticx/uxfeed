import React, {Component} from 'react';
import moment from 'moment';
import UserComment from './usercomment.js';

export default class Annotation extends Component {
    resizeListener
    constructor(props) {
        super(props);
        this.state = {
            height: 80,
            expanded: props.expanded,
            modalState: 'closed',
            selected: false
        }
    }
    componentWillReceiveProps(newProps) {
    if(newProps.expanded != this.props.expanded) {
        this.setState({
          expanded: newProps.expanded
        });
      }
    }
  
    emojiPicker(emoji) {
        var type;
        switch (emoji) {
            case 'delighted': {
                return './img/emoji/delighted.png'
            }
            case 'annoyed': {
                return './img/emoji/annoyed.png'
            }
            case 'idea': {
                return './img/emoji/idea.png'
            }
            case 'thinking': {
                return './img/emoji/thinking.png'
            }
            case 'aghast': {
                return './img/emoji/aghast.png'
            }
            default: {
                return '';
            }
        }
    }
    render() {
        var imageW = this.props.annotation.imageW / this.props.scale + 'px';
        var imageH = this.props.annotation.imageH / this.props.scale + 'px';
        var annotationWrapper = {
                width: '100%',
                minHeight: this.state.expanded ? '150px' : '80px',
                backgroundColor: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: this.state.expanded ? 'space-between' : 'center',
                alignItems: 'center',
                padding: '0',
                marginBottom: '25px',
                boxShadow: '0 3px 15px 1px #777',
                overflow: 'hidden',
                border: this.state.selected == false ? '' : '3px solid ' + this.props.color.five
            },
            thumbnailStyle = {
                display: this.state.expanded ? '' : 'none',
                height: "100%",
                width: '100%',
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
                backgroundColor: this.props.color.four,
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
            }
        var currentComments = typeof this.props.annotation.comments == 'object' ? this.props.annotation.comments : [];
        var Comments = currentComments.map((comment) => {
          return (
            <div style={userCommentStyle}>
              <span style={userCommentStyle.commentUser}>{comment.username + ':'}</span>
              <span>{comment.comment}</span>

            </div>
          );
        });
        var annotationFooter = (
            <div style={annotationFooterStyle}>
                <div style={mainComment}>
                  <img src='/style/img/annotationWhite.svg' width='35' />
                  <span style={footerLeft.typeStyle}>{this.props.annotation.annotationType}</span>
                </div>
                <div style={annotationContent}>
                  <span style={{color: '#fff', fontWeight: 700}}>{this.props.annotation.annotationTitle}</span>
                </div>

            </div>
        );
        //moment(Date(this.props.annotation.timeUpdated)).format('MMM Do YY, HH:MM')
// <AnnotationModal toggleModal={(event) => {this.openModal(event)}} color={this.props.color} annotation={this.props.annotation} modalState={this.state.modalState} scale={this.state.scaleValue} />
        return (
            <div onClick={() => {this.addToCollection()}}style={annotationWrapper}>
                <div style={thumbnailStyle}>
                    {this.props.annotation.annotationMediaType == 'jpeg' ? <img src={this.props.annotation.annotationMedia} width='100%' height='auto'/> : this.props.annotation.annotationMediaType == 'webm' ? <video src={this.props.annotation.annotationMedia} controls width='100%' height='auto'/> : <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column'}}> <img src={this.props.annotation.annotationMedia} width='100%' height='auto'/> <audio controls src={this.props.annotation.annotationMediaAudio} /> </div> }
                </div>
                {annotationFooter}
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
