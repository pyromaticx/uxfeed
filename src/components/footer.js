import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    var footerStyle = {
      height: '200px',
      width: '100%',
      backgroundColor: this.props.color.secondary,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      color: this.props.color.textLight
    }
    return (
      <div style={footerStyle}>
        <h4>Copyright 2016 Go Live Labs</h4>
        <h4>Copyright 2016 Go Live Labs</h4>
        <h4>Copyright 2016 Go Live Labs</h4>
      </div>
    );
  }
}
