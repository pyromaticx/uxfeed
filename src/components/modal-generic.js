import React, {Component} from 'react';

export default class ModalGeneric extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    var modalOverlay = {
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '500',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    },
    modalWrapper = {
      width: '450px',
      height: '300px',
      backgroundColor: '#f9f9f9',
      border: '3px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    modalContent = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '20px',
      textAlign: 'center',
      height: '100%',
      width: '100%',
      padding: '15px'
    },
    closer = {
      position: 'absolute',
      transform: 'translateX(415px)',
      color: '#333',
      fontSize: '30px',
      height: '30px',
      width: '30px',
      cursor: 'pointer'
    };
    return(
      <div style={modalOverlay}>
        <div style={modalWrapper}>
          <span className='fa fa-close' style={closer} onClick={() => {this.props.close()}}></span>
          <div style={modalContent}>
            <span>{this.props.title}</span>

            <span>{this.props.content}</span>
          </div>
        </div>
      </div>
    );
  }
}
