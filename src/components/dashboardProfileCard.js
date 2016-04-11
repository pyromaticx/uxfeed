import React, {Component} from 'react';

var userData = {
    name: "James Kim",
    company: "Go Live Labs",
    title: "UI Developer",
    city: "San Jose",
    state: "Ca"
}

var profileCardWrapper = {
    width: '100%',
    marginTop: "2%",
    marginBottom: "5%",
    height: "100%",
    position: "relative"
}



export default class DashboardProfileCard extends Component{
    constructor(props){
        super(props);
        this.state = {};
        }

        render(){
            var topSection ={
                height: "100px",
                backgroundColor: "#7b1cf0"
            };
            var bottomSection = {
                height: "100px",
                backgroundColor: "white"
            };
            var profilePicContainer = {
                width: "30%",
                height: "100px",
                position: "absolute",
                top: "25%",
                left: "2%"
            };
            var profileText = {
                position: "absolute",
                top: "50%",
                left: "40%"
            };
            return(
                <div style={profileCardWrapper}>
                    <div style={profilePicContainer}>
                        <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt=""/>
                        <p>Annotations</p>
                        <p>14</p>
                    </div>
                    <div style={profileText}>
                        <h6>James Kim</h6>
                        <p>Go Live Labs</p>
                        <p>UI Developer</p>
                        <p>San Jose, CA</p>
                    </div>
                    <div style={topSection}></div>
                    <div style={bottomSection}></div>

                </div>
            )
        }
    }
