import React, {Component} from 'react';

export default class Annotation extends Component {
  constructor() {
    super();
    this.state = {
      height: 100,
      expanded: false
    }
  }
  render() {
    var annotationWrapper = {
      width: '100%',
      height: this.state.height + 'px',
      backgroundColor: this.props.color.primary,
      border: '1px solid ' + this.props.color.tertiary,
      transition: 'all 100ms ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px',
      marginTop: '20px',
      boxShadow: '3px 3px 5px 0.5px ' + this.props.color.tertiary,
      borderRadius: '5px'
    },
    thumbnailStyle = {
      marginTop: '20px',
      marginBottom: '20px',
      display: this.state.expanded ? 'flex' : 'none',
      backgroundImage: this.props.annotation.image,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPostion: 'center',
      height: '350px',
      width: '100%',
      border: '1px solid ' + this.props.color.tertiary,
      transition: 'all 100ms ease'
    },
    textRow = {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',

    },
    title = this.truncate(this.props.annotation.title),
    text = this.truncate(this.props.annotation.text);

    return (
      <div
        onClick={() => {this.expandAnnotation()}}
        style={annotationWrapper}>
          <div style={textRow}>
            <h6>{this.state.expanded ? this.props.annotation.title : title}</h6>
            <h6>{this.props.annotation.type}</h6>
          </div>
          <div style={thumbnailStyle}></div>
          <h6>{this.state.expanded ? this.props.annotation.text : text}</h6>
      </div>
    );
  }
  expandAnnotation() {
    var current = !this.state.expanded;
    this.setState({
      expanded: current,
      height: current == true ? '600' : '100'
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
