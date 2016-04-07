import React, {Component} from 'react';

export default class FooterItem extends Component {
  render() {
    var itemStyles = {
      height: '90%',
      width: this.props.width || '30%',
      color: this.props.color.textLight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column'
    }
    return (
      <div style={itemStyles}>
        {this.props.title}
        {this.props.content}
      </div>
    );
  }
}
