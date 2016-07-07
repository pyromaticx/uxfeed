import React, {Component} from 'react';
import api from './api/api.js';
export default class EditProfile extends Component {
  constructor() {
    super();
    if(localStorage.getItem('auth') == '' || localStorage.getItem('user') == '') {
      return window.location = 'http://uxpass.com/#/login';
    } else {
      var user = JSON.parse(localStorage.user);
      this.state = {
        id: user.userId,
        userName: user.userName,
        firstName: user.userFirstName,
        lastName: user.userLastName,
        employer: user.userEmployer,
        designation: user.userDesignation,
        city: user.userCity,
        state: user.userState,
        picURL: user.userPicURL,
      };
    }
  }
  render() {
    var modalOverlay = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '10000'
    },
    editProfileWrapper = {
      height: '90%',
      width: '400px',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',

    },
    closeButton = {
      position: 'absolute',
      top: '40px',
      marginLeft: '365px',
      fontSize: '30px',
      color: '#333',
    },
    formStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRows = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    profilePic = {
      backgroundImage: "url(" + (this.state.picURL || "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png") + ")",
      height: '150px',
      width: '150px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    };

    if(this.props.active == false) {
      return (<div></div>);
    }
    return (
      <div style={modalOverlay}>
        <div style={editProfileWrapper}>
          <span className='fa fa-close' style={closeButton} onClick={() => {this.props.switchCB()}}></span>
          <h3>Edit Profile information:</h3>
          <div style={profilePic}>
          </div>
          <input style={{width: '250px'}} className='form-control' onChange={(event) => {this.picChange(event)}} name='profilePic' type='file'></input>
          <form style={formStyle} onSubmit={(event) => {this.submitChanges(event)}}>
            <label style={inputRows} htmlFor='firstname'>First Name:
              <input type='text' name='firstname' value={this.state.firstName} onChange={(event) => {this.editField(event)}} />
            </label>
            <label  style={inputRows} htmlFor='lastname'>Last Name:
              <input type='text' name='lastname' value={this.state.lastName} onChange={(event) => {this.editField(event)}} />
            </label>
            <label style={inputRows} htmlFor='city'>City:
              <input type='text' name='city' value={this.state.city} onChange={(event) => {this.editField(event)}} />
            </label>
            <label style={inputRows} htmlFor='state'>State:
              <input type='text' name='state' value={this.state.state} onChange={(event) => {this.editField(event)}} />
            </label>
            <label style={inputRows} htmlFor='employer'>Employer:
              <input type='text' name='employer' value={this.state.employer} onChange={(event) => {this.editField(event)}} />
            </label>
            <label style={inputRows} htmlFor='designation'>Job Title:
              <input type='text' name='designation' value={this.state.designation} onChange={(event) => {this.editField(event)}} />
            </label>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
  picChange(event) {
    var reader = new window.FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onloadend = () => {
      var base64data = reader.result;
      this.setState({
        picURL: base64data
      });
  }
  //  console.log(event.target.files)
  }
  submitChanges(event) {
    event.preventDefault();
    event.stopPropagation();
    var updated = {
      userFirstName: this.state.firstName,
      userLastName: this.state.lastName,
      userEmployer: this.state.employer,
      userDesignation: this.state.designation,
      userCity: this.state.city,
      userState: this.state.state,
      userPicURL: this.state.picURL
    };
    api.editProfile(updated, this.state.id).done((resp) => {
      api.getUserProfile(this.state.userName).done((res) => {
        localStorage.user = JSON.stringify(res);
        this.props.switchCB();
        location.reload();
      });
    });


  }
  editField(event) {
    switch(event.target.name) {
      case 'firstname': {
        this.setState({
          firstName: event.target.value
        }, console.log(this.state));
        break;
      }
      case 'lastname': {
        this.setState({
          lastName: event.target.value
        });
        break;
      }
      case 'city': {
        this.setState({
          city: event.target.value
        });
        break;
      }
      case 'state': {
        this.setState({
          state: event.target.value
        });
        break;
      }
      case 'employer': {
        this.setState({
          employer: event.target.value
        });
        break;
      }
      case 'designation': {
        this.setState({
          designation: event.target.value
        });
        break;
      }
    }
  }
}
