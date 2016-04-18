import React, {Component} from 'react';

export default class Bubble extends Component {
  loaderInterval
  constructor() {
    super();
    this.state = {
      toggle: false
    }
  }
  componentWillMount() {
    setTimeout(this.startUp.bind(this), this.props.delay);
  }
  startUp() {
    this.loaderInterval = setInterval(this.nextTick.bind(this), 150);
  }
  componentWillUnmount() {
    clearInterval(this.loaderInterval);
  }

  nextTick() {
  if(this.props.show == true) {
    return clearInterval(this.loaderInterval);
  }
  var toggleState = this.state.toggle;
  this.setState({
    toggle: !toggleState
  });
  }
  render() {
    var bubbleStyle = {
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        transition: 'all 150ms ease',
        backgroundColor: this.state.toggle ? this.props.color.six : this.props.color.secondary
      };
    return (
      <div style={bubbleStyle}>
      </div>
    );
  }
}
