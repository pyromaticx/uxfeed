import React, {Component} from 'react';

export default class SlideBox extends Component {
  constructor() {
    super();
    this.state = {
      boxExpanded: ''
    }
  }
  render() {
    var slideBoxWrapper = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '600px',
      transition: 'all 500ms ease',
      color: this.props.color.textLight,
      boxShadow: '0px 0px 10px ' + this.props.color.text,
      padding: '0'
    },
    box1 = {
      display: 'flex',
      flexDirection: 'column',
      height: this.state.boxExpanded == 'box1' ? '70%' : '33.33%',
      transition: 'all 500ms ease',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.props.color.secondary,
      borderBottom: '10px solid ' + this.props.color.tertiary
    },
    box2 = {
      display: 'flex',
      flexDirection: 'column',
      height: this.state.boxExpanded == 'box2' ? '70%' : '33.33%',
      transition: 'all 500ms ease',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.props.color.blue,
      borderBottom: '10px solid ' + this.props.color.tertiary
    },
    box3 = {
      display: 'flex',
      flexDirection: 'column',
      height: this.state.boxExpanded == 'box3' ? '70%' : '33.33%',
      transition: 'all 500ms ease',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: this.props.color.four
    }

    return (
      <div onMouseLeave={() => {this.handleMouse()}} style={slideBoxWrapper}>
        <div onMouseOver={() => {this.handleMouse('box1')}} style={box1}>
          <h3>This text is always shown</h3>
          <h5 style={{display: this.state.boxExpanded == 'box1' ? 'flex' : 'none'}}>
            This text appears on hover.
          </h5>
        </div>
        <div onMouseOver={() => {this.handleMouse('box2')}} style={box2}>
        <h3>This text is always shown</h3>
        <h5 style={{display: this.state.boxExpanded == 'box2' ? 'flex' : 'none'}}>
          This text appears on hover.
        </h5>
        </div>
        <div onMouseOver={() => {this.handleMouse('box3')}} style={box3}>
        <h3>This text is always shown</h3>
        <h5 style={{display: this.state.boxExpanded == 'box3' ? 'flex' : 'none'}}>
          This text appears on hover.
        </h5>
        </div>
      </div>
    );
  }
  handleMouse(type) {
    this.setState({
      boxExpanded: type
    });
  }
}
