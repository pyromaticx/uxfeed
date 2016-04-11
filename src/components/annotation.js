import React, {Component} from 'react';

export default class Annotation extends Component {
  constructor() {
    super();
    this.state = {
      height: 80,
      expanded: true,
      imgScale: 5.5 - (window.innerWidth / 450)
    }
  }
  componentWillMount() {
    window.addEventListener('resize', () => this.handleResize())
  }
  componentWillUnmount() {
    window.removeEventListener('resize');
  }
  handleResize() {
    this.setState({
      imgScale: 5.5 - (window.innerWidth / 450)
    });
  }
  render() {
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
      backgroundImage: 'url(' + this.props.annotation.image + ')',
      backgroundSize: imageW + ' ' + imageH,
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
      height: '50px',
      width: '50px',
      margin: "0",
      backgroundImage: 'url(' + (this.props.annotation.userImage || 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png') + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPostion: 'center'
    },
    title = this.truncate(this.props.annotation.title),
    text = this.truncate(this.props.annotation.text);

    return (
      <div
        onClick={() => {this.expandAnnotation()}}
        style={annotationWrapper}>
          <div>
            <div style={userImageStyle} onMouseOver={(event) => {this.userHover(event)}}></div>
            <div className="right">
              <h6>Some Name</h6>
              <p>Some Company</p>
              <p>Some Title</p>
              <p>Some city and state</p>
            </div>
          </div>
          <div style={thumbnailStyle}></div>
        <h6>{this.state.expanded ? this.props.annotation.title : title}</h6>
        <h6>{this.props.annotation.type}</h6>
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
