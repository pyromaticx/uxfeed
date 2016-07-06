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
      companyBox: '',
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
    });
  }
  updateCompany(event) {
    this.setState({
      companyBox: event.target.value
    });
  }
  submitEmail(event) {
    event.preventDefault();
    event.stopPropagation();

    var formDataArr = $(event.target).serializeArray();
    var formData = {};
    formDataArr.map(function(elem) {
      formData[elem.name] = elem.value
    })
    console.log(formData);
    if(formData['g-recaptcha-response'].length > 0) {
      api.emailRohit(formData.name, formData.email, formData.company).done((resp) => {
        if(resp.error) {
          this.setState({
            modal: (<ModalGeneric title='Oops!' content="Looks like we have already received a request from this email. We will be in touch soon!" close={() => {this.closeModal()}}/>)
          });
          return;
        } else {
          this.setState({
            modal: (<ModalGeneric title='Thanks!' content="We will be in touch with you soon!" close={() => {this.closeModal()}}/>)
          });
        }
      });

    } else {
      alert('Please complete all fields before submitting');
    }
  }
  closeModal() {
    this.setState({
      modal: '',
      inputBox: '',
      nameBox: '',
      companyBox: ''
    });
    grecaptcha.reset();
  }
  render() {
    var jumboTron = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
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
      opacity: (this.state.inputBox.length + this.state.nameBox.length + this.state.companyBox.length) > 0 ? '1.0' : '0.0',
      height: (this.state.inputBox.length + this.state.nameBox.length + this.state.companyBox.length) > 0 ? '100px': '0px',
      transition: 'all 500ms ease'
    };
    return (
      <div style={landingStyle}>
        <form style={jumboTron} onSubmit={(event) => {this.submitEmail(event)}}>
          <h1>Enter your email to be invited!</h1>
          <input name='email' type='email' style={{width: '300px', marginTop: '20px', marginBottom: '20px'}} placeholder='Enter your email address' value={this.state.inputBox} className='text' onChange={(event) => {this.updatedInput(event)}} />
          <input name='name' type='text' style={{width: '300px', marginBottom: '20px'}} placeholder='Enter your name' value={this.state.nameBox} className='text' onChange={(event) => {this.updatedNameInput(event)}} />
          <input name='company' type='text' style={{width: '300px', marginBottom: '20px'}} placeholder='Enter your company' value={this.state.companyBox} className='text' onChange={(event) => {this.updateCompany(event)}} />
          <div class="g-recaptcha" data-sitekey="6LfLpCMTAAAAAMBfqgxFnvKLCf2OntVNQ0bAzzy2"></div>
          <button type='submit'>Let's Go!</button>
        </form>
        {this.state.modal}

      </div>
    );
  }
}
