import React, {Component} from 'react';

export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        var imgContainer = {
            height: "250px"
        };
        var workList = {
            display: "flex",
            flexDirection: "row",
            width: "100%"

        };
        var workListItems = {
            padding: "7px 7px 7px 0"
        };
        return(
            <div style={workList}>
                <div style={workListItems}>
                    <h3>Title</h3>
                    <div style={imgContainer}>
                        <img src="https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=849c44f2c8ad8d387d7e6a641fc18626" alt=""/>
                    </div>
                    12<i className="fa fa-thumbs-o-up"></i> 3<i className="fa fa-thumbs-o-down"></i>
                    <i className="fa fa-comments" ariaHidden="true"></i>
                </div>
                <div style={workListItems}>
                    <h3>Title</h3>
                    <div style={imgContainer}>
                        <img src="https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=849c44f2c8ad8d387d7e6a641fc18626" alt=""/>
                    </div>
                    12<i className="fa fa-thumbs-o-up"></i> 3<i className="fa fa-thumbs-o-down"></i>
                    <i className="fa fa-comments" ariaHidden="true"></i>
                </div>
                <div style={workListItems}>
                    <h3>Title</h3>
                    <div style={imgContainer}>
                        <img src="https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=849c44f2c8ad8d387d7e6a641fc18626" alt=""/>
                    </div>
                    12<i className="fa fa-thumbs-o-up"></i> 3<i className="fa fa-thumbs-o-down"></i>
                    <i className="fa fa-comments" ariaHidden="true"></i>
                </div>
                <div style={workListItems}>
                    <h3>Title</h3>
                    <div style={imgContainer}>
                        <img src="https://images.unsplash.com/photo-1460899960812-f6ee1ecaf117?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=849c44f2c8ad8d387d7e6a641fc18626" alt=""/>
                    </div>
                    12<i className="fa fa-thumbs-o-up"></i> 3<i className="fa fa-thumbs-o-down"></i>
                    <i className="fa fa-comments" ariaHidden="true"></i>
                </div>
            </div>
        );
    };
}