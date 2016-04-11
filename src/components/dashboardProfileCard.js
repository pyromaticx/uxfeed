import React, {Component} from 'react';





export default class DashboardProfileCard extends Component{
    constructor(props){
        super(props);
        this.state = {};
        }

        render(){
            var profileCardWrapper = {
                width: '100%',
                height: "200px",
                marginTop: "2%",
                marginBottom: "5%",
                display: "flex",
                flexDirection: "row",
                backgroundColor: this.props.color.secondary
            };
            var bottomSection = {
                height: "100px",
                backgroundColor: "white"
            };
            var profilePicContainer = {
                width: "100%",
                height: "100%",
                flex: "3"
            };
            var fontColor = {
                color: "white",
                flex: "3",
                wordWrap: "break-all"
            }
            return(
                <div style={profileCardWrapper}>
                        <div style={profilePicContainer}>
                            <img src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" alt=""/>
                        </div>
                        <div style={fontColor}>
                            <h6>{this.props.user.name}</h6>
                            <p>{this.props.user.company}</p>
                            <p>{this.props.user.title}</p>
                            <p>{this.props.user.location}</p>
                        </div>
                </div>
            )
        }
    }
