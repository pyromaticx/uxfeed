import React, {Component} from 'react';

export default class allUsersModule extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        var badgeStyle = {
            display: "inline-block",
            backgroundColor: "#00e565",
            padding: "2px 10px",
            borderRadius: "50px",
            marginLeft: "5px",
            color: "white"
        }
        return(
            <li>{this.props.title} <span style={badgeStyle}>4</span></li>
        )
    }
}