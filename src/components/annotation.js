
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
            imgScale: 2.5,
            clicked: false
        }
    }
    componentWillReceiveProps() {
      if(!this.state.clicked) {
        this.setState({
          expanded: this.props.expanded
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
                minHeight: this.state.expanded ? '300px' : '80px',
                backgroundColor: this.props.color.primary,
                border: '1px solid ' + this.props.color.five,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: this.state.expanded ? 'space-between' : 'center',
                alignItems: 'center',
                padding: '20px',
                marginBottom: '25px',
                boxShadow: '0 3px 15px 1px ' + this.props.color.five,
                borderRadius: '5px',
                overflow: 'hidden',
            },
            thumbnailStyle = {
                marginTop: '20px',
                marginBottom: '20px',
                display: this.state.expanded ? '' : 'none',
                backgroundImage: this.props.annotation.image,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPostion: 'center',
                height: imageH,
                width: imageW,
                border: '1px solid gray'
            },
            textRow = {
                display: 'flex',
                width: '100%',
                alignItems: 'center'
            },
            userImageStyle = {
                display: 'flex',
                alignContent: 'center',
                height: '50px',
                margin: "0",
                backgroundImage: 'url(http://s3.amazonaws.com/37assets/svn/765-default-avatar.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                flex: '1'
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
                }
            },
            headingStyle = {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'space-between',
                flexDirection: 'row',
                width: '100%'
            },
            annotationFooterStyle = {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'space-around',
                width: '100%',
                minHeight: '50px'

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
            thumbnailDotStyle = {
                position: 'relative',
                top: this.props.annotation.thumbnailDot.top,
                left: this.props.annotation.thumbnailDot.left,
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: this.props.annotation.thumbnailDot.background
            },
            timeSocialStyles = {
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginBottom: '10px',
                time: {
                    flex: '5',
                    fontSize: '12px'
                },
                social: {
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    pinterest: {
                        color: '#bd081c'
                    },
                    facebook: {
                        color: '#3b5998'
                    },
                    twitter: {
                        color: '#55acee'
                    }
                }
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
        var userModule = (
            <div style={userInfo}>
                <h3>{this.state.expanded ? this.props.annotation.title : this.truncate(this.props.annotation.title)}</h3>
            </div>
        );
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
                <div style={timeSocialStyles}>
                    <div style={timeSocialStyles.time}>
                        {moment(Date(this.props.annotation.timeStamp)).format('MMM Do YY, HH:MM')}
                    </div>
                    <div style={timeSocialStyles.social}>
                        <span className='fa fa-pinterest-p' style={timeSocialStyles.social.pinterest}></span>
                        <span className='fa fa-twitter' style={timeSocialStyles.social.twitter}></span>
                        <span className='fa fa-facebook' style={timeSocialStyles.social.facebook}></span>
                    </div>
                </div>
                <div style={mainComment}>
                  <span style={mainComment.span}>
                    {this.props.annotation.userId + ":"}
                  </span>
                    {this.props.annotation.text}
                </div>
                {Comments}
                <UserComment updateCommentsCB={this.props.updateCommentsCB}
                             user={this.props.user}
                             color={this.props.color}
                             annotation={this.props.annotation} />
            </div>
        );

        var emojiModule = (
            <div style={emojiStyle}>
            </div>
        );
        var thumbnailDot = (
            <div style={thumbnailDotStyle}>
            </div>
        );
        return (
            <div
                onClick={() => {this.expandAnnotation()}}
                style={annotationWrapper}>
                <div style={headingStyle}>
                    <div style={userImageStyle}></div>
                    {userModule}
                    {emojiModule}
                </div>
                <div style={thumbnailStyle}>
                    {this.props.annotation.image ? thumbnailDot : ''}
                </div>
                {this.state.expanded ? annotationFooter : ''}
            </div>
        );
    }
    expandAnnotation() {
        var current = !this.state.expanded;
        this.setState({
            expanded: current,
            height: current == true ? '300' : '80',
            clicked: true
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