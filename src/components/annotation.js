import React, {Component} from 'react';

export default class Annotation extends Component {
  resizeListener
  constructor(props) {
    super(props);
    this.state = {
      height: 80,
      expanded: props.expanded || false,
      imgScale: 2.5
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
      alignItems: 'center',
      justifyContent: this.state.expanded ? 'space-between' : 'center',
      padding: '20px',
      marginTop: '20px',
      boxShadow: '0 3px 15px 0.5px ' + this.props.color.textLight,
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
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    userImageStyle = {
      height: '50px',
      width: '50px',
      backgroundImage: 'url(' + (this.props.annotation.userImage || 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png') + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPostion: 'center'
    },
    mainComment = {
      display: this.state.expanded ? 'inline-flex' : 'none',
      span: {
        fontWeight: 'bold',
        color: this.props.color.five,
        paddingRight: '5px'
      }
    },
    title = this.truncate(this.props.annotation.title),
    text = this.truncate(this.props.annotation.text);

    return (
      <div
        onClick={() => {this.expandAnnotation()}}
        style={annotationWrapper}>
          <div style={textRow}>
            <div style={userImageStyle} onMouseOver={(event) => {this.userHover(event)}}></div>
            <h6>{this.state.expanded ? this.props.annotation.title : title}</h6>
            <h6>{this.props.annotation.type}</h6>
          </div>
          <div style={thumbnailStyle}></div>
          <div style={mainComment}>
            <span style={mainComment.span}>
              {this.props.annotation.userId + ":"}
            </span>
            {this.props.annotation.text}
          </div>
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
