import React, {Component} from 'react';
import Logo from './logo.js';
import HeaderItem from './header-item.js';
import {Link} from 'react-router';
export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: ''
        }
    }
    render() {
        var headerStyle = {
                height: '60px',
                width: '100%',
                backgroundColor: this.props.color.secondary,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: "0 16.5%",
                position: "fixed",
                zIndex: "100",
                boxShadow: '0 3px 15px 1px ' + this.props.color.five,
            },
            inputStyle = {
                width: '219px',
                marginRight: "10px"
            };
        return (
            <div style={headerStyle}>
                <Link to='/'>
                    <Logo
                        color={this.props.color}
                        height={headerStyle.height} />
                </Link>

                <HeaderItem
                    linkTo="/"
                    color={this.props.color}
                    height={headerStyle.height}
                    iconType='fa-home' />
                <HeaderItem
                    linkTo='annotations'
                    color={this.props.color}
                    height={headerStyle.height}
                    iconType={'fa-rocket'} />
                <HeaderItem
                    linkTo="pricing"
                    color={this.props.color}
                    height={headerStyle.height}
                    iconType={"fa-money"} />

                <input
                    onChange={(event) => {this.inputChange(event)}}
                    style={inputStyle}
                    className='form-control'
                    type='text'
                    placeholder='🔎  Search'
                    value={this.state.searchValue}/>
            </div>
        );
    }
    inputChange(event) {
        this.setState({
            searchValue: event.target.value
        });
    }
}