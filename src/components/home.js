import React, {Component} from 'react';
import SpanItem from './spanitem.js';
import SlideBox from './slidebox.js';

export default class Home extends Component {
  updatedInput(event) {
    this.setState({
      inputBox: event.target.value
    });
  }
  submitEmail() {
    api.emailRohit();
  }
  render() {
    var jumboTron = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      height: '50vh',
      width: '100%',
      backgroundColor: 'transparent'
    },
    landingStyle = {
      width: '100%',
      overflowX: 'hidden'
    },
    triSpanner = {
      height: '300px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    twoPanel = {
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: this.props.color.primary,
      padding: '40px',
      backgroundColor: this.props.color.five,
      left: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: this.props.color.textLight
      },
      right: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }
    return (
      <div style={landingStyle}>
        <div style={jumboTron}>
          <h1>Enter your email to be invited!</h1>
          <input type='email' style={{width: '300px'}} placeholder='Enter your email address' className='text' onChange={(event) => {this.updatedInput(event)}} />
          <button type='button' onClick={() => {this.emailSubmit()}}>Let's Go!</button>
        </div>


      </div>
    );
  }
}
