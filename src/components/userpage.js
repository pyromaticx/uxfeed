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
  text: "Lorem Ipsum delo mumbo jumbo. Her the do to the left and bring a widget this Thurs.",
  timeStamp: moment(Date.now()).format('MMM Do YY, HH:MM'),
  type: "Business Review",
  pinAttribute: '123456',
  pinX: '123',
  pinY: '456',
  emoji: 'emoji',
  image: img,
  imageH: 683,
  imageW: 1301,
  comments: 'Lorem Ipsum delo mumbo jumbo. Her the do to the left and bring a widget this Thurs.',
  isPrivate: false,
  thumbnailDot: {
    top: '35%',
    left: '35%'
  }
}


export default class UserPage extends Component {
  intervalID
  constructor() {
    super();
    this.state = {
      expandAll: false,
      getResponse: []
    };
  }
  componentWillMount() {
    this.getUpdated()
    window.setInterval(this.getUpdated.bind(this), 1000);
  }
  getUpdated() {
    console.log(this.props.route.path);
    switch (this.props.route.path) {
      case 'annotations': {
          api.annotations().then((data) => {
            var sortedByPinId = data.sort(function(a, b) {
              return a.pinId - b.pinId;
            }).reverse();
            this.setState({
              getResponse: sortedByPinId
            });
          });
          break;
        }
      case 'username/:username': {
        api.getUser(this.props.params.username).then((data) => {

          var sortedByPinId = data.sort(function(a, b) {
            return a.pinId - b.pinId;
          }).reverse();
          this.setState({
            getResponse: sortedByPinId
          });
        });
        break;
      }
      }
    }
  render() {
    var Annotations = this.state.getResponse.map((annotation, idx) => {
      return (
        <Annotation
            key={idx}
            expanded={this.state.expandAll}
            annotation={annotation}
            color={this.props.route.color}/>);
    });
    console.log(Annotations)
    var pageWrapper = {
      width: '75%',
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
          {Annotations}
        </div>
        <div style={rightBarWrapper}>
          <SideBar color={this.props.route.color} />
        </div>
      </div>
    );
  }
}
