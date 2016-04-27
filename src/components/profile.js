import React, {Component} from 'react';
import Portfolio from "./portfolio";
import ProfileAbout from "./profileAbout";
import ProfileLinks from "./profileLinks";

var dummyUser = {
    name: "Derpy Dan",
    company: "Go Live Labs",
    title: "UI/UX Experts",
    location: "Sunnyvale, CA",
    following: ["brendon", "james", "kelly"],
    followers: ["steve", "dan", "somebooty"]
};

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.showModules();
    }

    showModules(){
        switch(this.props.route.path){
            case 'profile/:username/about':{
                return(
                    <h1>About</h1>
                )
            }
        }
    }

    render(){
        var profilePageWrapper = {
            display: 'flex',
            flexDirection: "column",
            width: "80%"
        };
        var imgContainer = {
            height: "250px",
            position: "relative",
            top: "125px"
        };
        var workSection = {
            width: "100%",
            marginTop: "2.5px"
        };
        var topSection = {
            display: "flex",
            justifyContent: "center",
            background: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=ffe83a90bb5ae89e85119121c8d2399a')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%"
        };
        var pageNumbers = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px",
            fontSize: "1.25em"
        };
        var threeLinks = {
            display: "flex",
            flexDirection: "row",
            fontSize: "1.5em",
            backgroundColor: this.props.color.five,
            height: "250px",
            justifyContent: "space-around"
        };
        var infoStyle = {
            padding: "15px 30px",
            position: "relative",
            top: "140px"
        };
        var imgStyles = {
            borderRadius: "50%"
        };
        var pipes = {
            fontSize: "2em",
            fontWeight: "200",
            position: "relative",
            top: "5px"
        };
        return(
            <div style={profilePageWrapper}>
                <div style={topSection}>
                    <div style={imgContainer}>
                        <img style={imgStyles} src='http://s3.amazonaws.com/37assets/svn/765-default-avatar.png' alt="Profile Pic"/>
                    </div>
                    <div style={infoStyle}>
                        <h3 className="info">{dummyUser.name}</h3>
                        <p className="info">{dummyUser.company}</p>
                        <p className="info">{dummyUser.title}</p>
                        <h3 className="info">
                            Rate 15/650 <span style={pipes}>|</span> 45 <i className="fa fa-thumbs-o-up"></i> <span style={pipes}>|</span> 10 <i className="fa fa-thumbs-o-down"></i>
                        </h3>
                    </div>
                </div>
                <div style={threeLinks}>
                    <ProfileLinks
                        title="Portfolio"
                        linkTo="profile/:username/"
                        />
                    <ProfileLinks
                        title="About"
                        linkTo="profile/:username/about/"
                    />
                    <ProfileLinks
                        title="Contact"
                        linkTo="profile/:username/contact/"
                    />
                </div>
                <br/>
                <div style={workSection}>
                    <Portfolio />

                    <Portfolio />
                    <div style={pageNumbers}>
                        <i className="fa fa-chevron-left"></i> <span>1 2 3 ... 8</span> <i className="fa fa-chevron-right"></i>
                    </div>
                </div>
            </div>

        );
    };
}