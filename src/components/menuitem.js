import React, {Component} from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
      active: false,
      page: 1
    };
  }
  handleMouseOver() {
    this.setState({
      hovered: true
    });
  }
  handleMouseLeave() {
    this.setState({
      hovered: false
    });
  }

  exeCallback(submit) {
    if(!this.state.active) {
      this.setState({
        active: true
      });
      this.props.callback();
    } else {
      this.setState({
        active: false
      });
      this.props.callback(submit);
    }
  }
  buttonSwitch() {
    switch (this.props.button) {
      case 'true': {
        return (
          <button className='btn btn-default' type='button' onClick={() => this.exeCallback('buttonClicked')}>{this.props.buttonText}</button>
        );
      }
      case 'page': {
        return (
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <button type='button' style={{}} onClick={() => {this.setState({page: this.state.page--})}}>less</button>
            <button type='button' style={{}} onClick={() => {this.setState({page: this.state.page++})}}>more</button>
          </div>
        );
      }
    }
  }
  render() {
    var menuItemStyle = {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: this.state.active ? '100%': '50px',
      width: '100%',
      alignItems: 'center',
      justifyContent: this.state.active ? 'space-between' : 'center',
      transition: 'max-height 150ms ease, background-color 50ms ease, color 50ms ease',
      padding: '10px',
      color: this.props.color.text,
      borderTop: this.state.active ? '3px solid rgba(0,0,0,0.3)' : '',
      borderBottom: this.state.active ? '3px solid rgba(0,0,0,0.3)' : '',
      backgroundColor: this.state.hovered ? this.props.activeColor || this.props.color.five : this.state.active ? this.props.activeColor || this.props.color.five : this.props.color.primary,
      cursor: 'pointer',
      badge: {
        display: this.props.value > 0 ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: this.props.color.primary,
        height: '30px',
        width: '30px',
        justifyContent: 'center'
      },
      infoPane: {
        display: 'flex',
        visibility: this.state.active ? 'visible': 'hidden',
        WebkitOpacity: this.state.active ? 1.0 : 0.0,
        opacity: this.state.active ? 1.0 : 0.0,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        transition: 'visibility 0ms, opacity 250ms ease, -webkit-opacity 250ms ease'
      }
    }
    return (
      <div onMouseOver={() => {this.handleMouseOver()}} onMouseLeave={() => {this.handleMouseLeave()}} onClick={() => {this.exeCallback()}} style={menuItemStyle}>
        <h6>{this.props.title}</h6>
        <div style={menuItemStyle.infoPane}>
        <h6>{this.props.activeText}</h6>
        {this.buttonSwitch()}
        </div>
      </div>
    );
  }
}
