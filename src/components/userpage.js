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
    comments: [{username: 'SimpleSara', comment: 'this is lame...', timestamp: moment(Date.now()).format('MMM Do YY, HH:MM') }],
    isPrivate: false,
    thumbnailDot: {
        top: '35%',
        left: '35%'
    }
}
var dummyUser = {
    name: "Derpy Dan",
    company: "Go Live Labs",
    title: "UI/UX Experts",
    location: "Sunnyvale, CA",
    following: ["brendon", "james", "kelly"],
    followers: ["steve", "dan", "somebooty"]
}


export default class UserPage extends Component {
    intervalID
    resizeListener
    constructor() {
        super();
        this.state = {
            expandAll: false,
            getResponse: [],
            contentWidth: window.innerWidth <= 1024 ? '100%' : '85%',
            scaleValue: window.innerWidth <= 1024 ? '4' : '3'
        };
    }
    componentWillMount() {
        this.resizeListener = window.addEventListener('resize', () => this.handleResize())
        this.getUpdated()
        window.setInterval(this.getUpdated.bind(this), 2000);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeListener);
    }
    handleResize() {
        var contentWidth = window.innerWidth <= 1024 ? '100%' : '85%';
        var scaleValue;

        if(window.innerWidth >= 1280) {
          scaleValue = 2.6;
        } else if (window.innerWidth >= 1024) {
          scaleValue = 3.5;
        } else {
          scaleValue = 4;
        }

        this.setState({
            contentWidth: contentWidth,
            scaleValue: scaleValue
        });
    }
    updateCommentsCB(commentObj) {
      // !!! TODO: Add PATCH request to update comment array in DB !!!
      console.log(commentObj)
    }
    getUpdated() {
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
                    user={dummyUser}
                    expanded={this.state.expandAll}
                    annotation={annotation}
                    scale={this.state.scaleValue}
                    updateCommentsCB={this.updateCommentsCB}
                    color={this.props.route.color}/>);
        });
        var pageWrapper = {
                width: this.state.contentWidth,
                minHeight : '100vh',
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: "4%"
            },
            leftBarWrapper = {
                width: '20%',
                marginTop: "2.5%"
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
            leftBarContent = [{title: 'All Users', value: ''}, {title: 'My Feeds', value: ''}, {title: 'Followed Users', value: dummyUser.following.length}, {title: 'My Followers', value: dummyUser.followers.length}, {title: 'Companies', value: ''}],
            rightBarContent = [{title: 'Most Used Pin Type', value: ''}, {title: 'Most Used Emojii', value: ''}, {title: 'Most Searched', value: ''}, {title: 'Most Votes', value: ''}, {title: 'Most Active Reviewed', value: ''}, {title: 'Most Pins', value: ''}];
        return (
            <div style={pageWrapper}>
                <div style={leftBarWrapper}>
                    <DashboardProfileCard
                        color={this.props.route.color}
                        user={dummyUser}
                    />
                    <SideBar
                        icon="fa-filter"
                        title='Filters'
                        content={leftBarContent}
                        color={this.props.route.color} />
                </div>
                <div style={annotationWrapper}>
                    {Annotations}
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
