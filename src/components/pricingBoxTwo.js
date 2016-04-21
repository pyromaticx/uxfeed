import React, {Component} from 'react';

export default class PricingBoxTwo extends Component{
    constructor(props){
        super(props);
        this.state ={};
    }

    render(){
        var box1styles = {
            marginTop: "25px",
            padding: "15px",
            border: "1px solid" + this.props.color.primary,
            width: "100%",
            height: "20em",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: this.props.color.six,
            flex: "1"
        };
        var textSpacing = {
            marginTop: "25px"
        };
        return(
            <div className="box1" style={box1styles}>
                <p style={textSpacing}>{this.props.text}</p>
                <h1 style={textSpacing}>{this.props.payments}</h1>
                <p style={textSpacing}>{this.props.pitch}</p>
                <button style={textSpacing} className="btn btn-primary btn-lg">Try Now</button>
            </div>
        );
    };
}