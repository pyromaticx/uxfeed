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
      display: this.state.expanded ? 'flex' : 'none',
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
      height: '100px',
      width: '100px',
      margin: "0",
      backgroundImage: 'url(' + (this.props.annotation.userImage || 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png') + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPostion: 'center'
    },
    userInfo = {
      fontSize: "14px"
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
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%'

    },
    title = this.truncate(this.props.annotation.title),
    text = this.truncate(this.props.annotation.text);
    var userModule = (
      <div style={userInfo} className="right">
        <h6>{this.props.user.name || 'Some Name'}</h6>
        <p>{this.props.user.company || 'Some Company'}</p>
        <p>{this.props.user.title || 'Some Title'}</p>
        <p>{this.props.user.location || 'Some City, Some State'}</p>
      </div>
    );
    var annotationFooter = (
      <div style={annotationFooterStyle}>
        <h6>{this.props.annotation.title}</h6>
        <h6>{this.props.annotation.type}</h6>
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
      <div>

      </div>
    );
    return (
      <div
        onClick={() => {this.expandAnnotation()}}
        style={annotationWrapper}>
          <div style={headingStyle}>
            <div style={userImageStyle} onMouseOver={(event) => {this.userHover(event)}}></div>
            {this.state.expanded ? emojiModule : userModule}
          </div>
          <div style={thumbnailStyle}></div>
        {this.state.expanded ? annotationFooter : ''}
      </div>
    );
  }
  userHover(event) {
    console.log(event.target)
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
