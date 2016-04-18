
import React, {Component} from 'react';

export default class DashboardProfileCard extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        var profileCardWrapper = {
            width: '100%',
            height: "150px",
            display: "flex",
            flexDirection: "row",
            backgroundColor: this.props.color.four,
            borderRadius: "5px",
            marginBottom: '25px'
        };
        var bottomSection = {
            height: "100px",
            backgroundColor: "white"
        };
        var profilePicContainer = {
            width: "100%",
            height: "100%",
            flex: "3",
            borderRadius: "5px 0 0 5px",
            backgroundImage: "url('http://s3.amazonaws.com/37assets/svn/765-default-avatar.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
        };
        var fontColor = {
            color: "white",
            flex: "3",
            wordWrap: "break-all",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "10px",
            borderRadius: "5px"
        }
        return(
            <div style={profileCardWrapper}>
                <div style={profilePicContainer}>
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