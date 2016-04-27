import React, {Component} from 'react';
import {Link} from 'react-router';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        var linkStyles = {
            position: "relative",
            top: "200"
        }
        return(
            <Link to={"/" + this.props.linkTo}>
                <div style={linkStyles}>
                    {this.props.title}
                </div>
            </Link>
        )
    }
}