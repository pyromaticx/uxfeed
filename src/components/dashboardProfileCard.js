import React, {Component} from 'react';

export default class DashboardProfileCard extends Component{
    constructor(props){
        super(props);
        this.state = {
          userData: JSON.parse(localStorage.getItem('user'))
        };
        }

        render(){
            var profileCardWrapper = {
                width: '100%',
                height: "150px",
                display: "flex",
                flexDirection: "row",
                backgroundColor: this.props.color.secondary,
                marginBottom: '15px'
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
            console.log(this.state.userData)
            return(

                <div style={profileCardWrapper}>
                        <div style={profilePicContainer}>
                        </div>
                        <div style={fontColor}>
                            <h5>{this.state.userData.userFirstName + ' ' + this.state.userData.userLastName}</h5>
                            <h6>{this.state.userData.userEmployer}</h6>
                            <h6>{this.state.userData.userDesignation}</h6>
                            <h6>{this.state.userData.userCity + ', ' + this.state.userData.userState}</h6>
                        </div>
                </div>
            )
        }
    }
