import React, {Component} from 'react';
import Annotation from './annotation.js';
import moment from 'moment';
import img from './base64.js';
import SideBar from './sidebar.js';
import api from './api/api.js';
var dummyAnnotation = {
  userId: 'pyromaticx',
  userImage: '',
  websiteId: 1,
  domain: 'https://www.homestarrunner.com',
  title: "Needs to be adjusted",
  text: "This looks good, but it could look better, its also really long and annoying",
  timeStamp: moment(Date.now()).format('MMM Do YY, HH:MM'),
  type: "Business Review",
  pinAttribute: '123456',
  pinX: '123',
  pinY: '456',
  emoji: 'emoji',
  image: img,
  imageH: 683,
  imageW: 1301,
  comments: 'this is a really cool app, but the comments suck',
  isPrivate: false,
  thumbnailDot: {
    top: '35%',
    left: '35%'
  }
}


export default class UserPage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentWillMount() {
  }
  render() {

    var pageWrapper = {
      width: '100%',
      minHeight : '100vh',
      backgroundColor: this.props.route.color.primary,
      display: 'flex',
      justifyContent: 'space-between'

    },
    leftBarWrapper = {
      width: '25%'
    },
    rightBarWrapper = {
      width: '20%'
    },
    annotationWrapper = {
      minWidth: '300px',
      width: '50%',
      paddingBottom: '20px'
    },
    leftBarContent = ['All Users', 'Followed Users', 'My Followers', 'Companies'];
    return (
      <div style={pageWrapper}>
        <div style={leftBarWrapper}>
          <SideBar
            title='Filters'
            content={leftBarContent}
            color={this.props.route.color} />
        </div>
        <div style={annotationWrapper}>
          <Annotation
          annotation={dummyAnnotation}
          color={this.props.route.color}/>

        </div>
        <div style={rightBarWrapper}>
          <SideBar color={this.props.route.color} />
        </div>
      </div>
    );
  }
}
