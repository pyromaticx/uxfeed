import React, {Component} from 'react';

export default class ColorPicker extends Component {
  constructor() {
    super();

  }
  render() {
    var pickerWrapper = {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      padding: '50px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    orange = {
      backgroundColor: '#ff875b',
      border: '1px solid #fff',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
    },
    dark = {
      backgroundColor: '#123',
      border: '1px solid #456',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
    },
    pink = {
      backgroundColor: '#FF4566',
      border: '1px solid #fff',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
    },
    green = {
      backgroundColor: '#4CD864',
      border: '1px solid #fff',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
    },
    teal = {
      backgroundColor: '#55E1B5',
      border: '1px solid #fff',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
    },
    purple = {
      backgroundColor: '#7B72E9',
      border: '1px solid #fff',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
    },

    bubble
    return (
      <div style={pickerWrapper}>
        <div onClick={(event) => {this.palleteClick(event)}} style={pink} data-color='pink'></div>
        <div onClick={(event) => {this.palleteClick(event)}} style={green} data-color='green'></div>
        <div onClick={(event) => {this.palleteClick(event)}} style={teal} data-color='teal'></div>
        <div onClick={(event) => {this.palleteClick(event)}} style={orange} data-color='orange'></div>
        <div onClick={(event) => {this.palleteClick(event)}} style={purple} data-color='purple'></div>
        <div onClick={(event) => {this.palleteClick(event)}} style={dark} data-color='dark'></div>
      </div>
    );
  }
  palleteClick(event) {
    this.props.colorChanger(event.target.dataset.color);
  }
}
