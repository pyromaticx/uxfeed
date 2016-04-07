import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    var landingStyle = {
      height: '60vh',
      width: '100%',
      borderBottom: '1px solid ' + this.props.route.color.tertiary,
      backgroundColor: this.props.route.color.four
    }
    return (
      <div style={landingStyle}>

      </div>
    );
  }
}
