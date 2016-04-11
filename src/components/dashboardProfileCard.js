import React, {Component} from 'react';

var profileCardWrapper = {
    width: '100%',
    marginTop: "2%",
    marginBottom: "5%",
    height: "100%"
}



export default class DashboardProfileCard extends Component{
    constructor(props){
        super(props);
        this.state = {};
        }

        render(){
            var topSection ={
                width: "100%",
                height: "100px",
                backgroundColor: this.props.color.secondary
            };
            var bottomSection = {
                height: "100px",
                backgroundColor: "white"
            };
            var profilePicContainer = {
                width: "100%",
                height: "100%"
            };
            var fontColor = {
                color: "white"
            }
            return(
                <div style={profileCardWrapper}>
                    <div style={topSection}>
                        <div style={profilePicContainer}>
                            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt=""/>
                        </div>
                    </div>
                    <div style={bottomSection}>
                        <h6>{this.props.user.name}</h6>
                        <p>{this.props.user.company}</p>
                        <p>{this.props.user.title}</p>
                        <p>{this.props.user.location}</p>
                    </div>
                </div>
            )
        }
    }
