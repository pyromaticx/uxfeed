import React, {Component} from 'react';

export default class SlideModal extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {

      var wrapper = {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(100,100,100,0.5)',
        position: 'fixed',
        top: 0,
        zIndex: '1100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalBox = {
        height: '80%',
        width: '80%',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
      },
      pageStyle= {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
      },
      inputs = {
        width: '300px'
      };
      return ();
  }
}
