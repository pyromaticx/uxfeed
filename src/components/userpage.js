import React, {Component} from 'react';
import Annotation from './annotation.js';
import moment from 'moment';
import img from './base64.js';
import SideBar from './sidebar.js';
import DashboardProfileCard from './dashboardProfileCard';
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
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: "4%"
    },
    leftBarWrapper = {
      width: '25%',
      marginTop: "2%"
    },
    rightBarWrapper = {
      width: '20%',
      marginTop: "2.5%"
    },
    annotationWrapper = {
      minWidth: '300px',
      width: '50%',
      paddingBottom: '20px',
      marginTop: "0.5%"
    },
    leftBarContent = ['All Users', 'My Feeds', 'Followed Users', 'My Followers', 'Companies'],
    rightBarContent = ['Most Used Pin Type', 'Most Used Emojii', 'Most Searched', 'Most Votes', 'Most Active Reviewed', 'Most Pins'];
    return (
      <div className="container" style={pageWrapper}>
        <div style={leftBarWrapper}>
          <DashboardProfileCard
          />
          <SideBar
            icon="fa-filter"
            title='Filters'
            content={leftBarContent}
            color={this.props.route.color} />
        </div>
        <div style={annotationWrapper}>
          <Annotation
          annotation={dummyAnnotation}
          color={this.props.route.color}
          content={dummyAnnotation.comments}/>
        </div>
        <div style={rightBarWrapper}>
          <SideBar color={this.props.route.color}
          icon="fa-fire"
          title="Popular"
          content={rightBarContent}/>
        </div>
      </div>
    );
  }
}
