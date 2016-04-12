import React, {Component} from 'react';

export default class Annotation extends Component {
    resizeListener
    constructor(props) {
        super(props);
        this.state = {
            height: 80,
            expanded: props.expanded || true,
            imgScale: 3.5
        }
    }
    componentWillReceiveProps(oldprops, newprops) {
        if(newprops.expanded) {
            this.setState({
                expanded: newprops.expanded
            });
        }
    }
    componentWillMount() {
        this.resizeListener = window.addEventListener('resize', () => this.handleResize())
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }
    handleResize() {

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
        console.log(this.state.imgScale)
        var imageW = this.props.annotation.imageW / this.state.imgScale + 'px';
        var imageH = this.props.annotation.imageH / this.state.imgScale + 'px';
        var annotationWrapper = {
                width: '100%',
                minHeight: this.state.height + 'px',
                backgroundColor: this.props.color.primary,
                border: '1px solid ' + this.props.color.tertiary,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: this.state.expanded ? 'space-between' : 'center',
                alignItems: 'center',
                padding: '20px',
                marginTop: '20px',
                boxShadow: "0px 1px 15px 2px #A8A8A8",
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
                border: '1px solid ' + this.props.color.tertiary,
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
                width: '40px',
                margin: "0",
                backgroundImage: 'url(' + (this.props.annotation.userImage || 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png') + ')',
                backgroundSize: 'contain',
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
                flex: '4'
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
                flexDirection: 'row',
                justifyContent: 'space-between',
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
            title = this.truncate(this.props.annotation.title),
            text = this.truncate(this.props.annotation.text);
        var userModule = (
            <div style={userInfo} className="right">
                <h6>{this.state.expanded ? this.props.annotation.title : this.truncate(this.props.annotation.title)}</h6>
            </div>
        );
        var annotationFooter = (
            <div style={annotationFooterStyle}>
                <div style={timeSocialStyles}>
                    <div style={timeSocialStyles.time}>
                        {this.props.annotation.timeStamp}
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
            </div>
        );
        //this.props.annotation.emoji
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
            height: current == true ? '300' : '80'
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