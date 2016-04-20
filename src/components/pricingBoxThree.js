import React, {Component} from 'react';

export default class PricingBoxThree extends Component{
    constructor(props){
        super(props);
        this.state={};
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
            backgroundColor: this.props.color.six
        };
        return(
            <div className="box1" style={box1styles}>
                <p>{this.props.text}</p>
                <h1>{this.props.payments}</h1>
                <p>{this.props.pitch}</p>
                <button className="btn btn-primary">Try Now</button>
            </div>
        );
    }
}
