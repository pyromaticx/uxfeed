import React, {Component} from 'react';
import SpanItem from './spanitem.js';
import SlideBox from './slidebox.js';
import api from './api/api.js';
import ModalGeneric from './modal-generic.js';
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      inputBox: '',
      nameBox: '',
      modal: ''
    }
  }
  updatedInput(event) {
    this.setState({
      inputBox: event.target.value
    });
  }
  updatedNameInput(event) {
    this.setState({
      nameBox: event.target.value
    })
  }
  submitEmail(event) {
    event.preventDefault();
    event.stopPropagation();

    var formDataArr = $(event.target).serializeArray();
    var formData = {
      email: formDataArr[0],
      name: formDataArr[1],
      captchaResp: formDataArr[2]
    }
    console.log(formData);
    if(formData.captchaResp) {
      api.emailRohit(formData.name, formData.email);
      this.setState({
        modal: (<ModalGeneric title='Thanks!' content="We will be in touch with you soon!" close={() => {this.closeModal()}}/>)
      });
    } else {
      alert('Please complete all fields before submitting');
    }
  }
  closeModal() {
    this.setState({
      modal: '',
      inputBox: '',
      nameBox: ''
    });
    grecaptcha.reset();
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
    },
    showHide = {
      opacity: (this.state.inputBox.length + this.state.nameBox.length) > 0 ? '1.0' : '0.0',
      transition: 'opacity 500ms ease'
    };
    return (
      <div style={landingStyle}>
        <form style={jumboTron} onSubmit={(event) => {this.submitEmail(event)}}>
          <h1>Enter your email to be invited!</h1>
          <input name='email' type='email' style={{width: '300px'}} placeholder='Enter your email address' value={this.state.inputBox} className='text' onChange={(event) => {this.updatedInput(event)}} />
          <input name='name' type='text' style={{width: '300px'}} placeholder='Enter your name' value={this.state.nameBox} className='text' onChange={(event) => {this.updatedNameInput(event)}} />
          <button type='submit'>Let's Go!</button>
          <div style={showHide} className="g-recaptcha" data-sitekey="6LfLpCMTAAAAAMBfqgxFnvKLCf2OntVNQ0bAzzy2"></div>
        </form>
        {this.state.modal}

      </div>
    );
  }
}
