import React, {Component} from 'react';

export default class ModalGeneric extends Component {
  render() {
    var modalOverlay = {
      position: 'fixed',
      top: '0',
      left: '0',
      zIndex: '500',
      backgroundColor: 'rgba(0,0,0,0.3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%'
    },
    modalWrapper = {
      height: '50%',
      width: '50%',
      maxWidth: '500px',
      maxHeight: '500px',
      minWidth: '300px',
      minHeight: '300px',
      backgroundColor: '#f9f9f9',
      border: '3px solid #ddd'
    },
    modalContent = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '20px',
      padding: '30px',
      textAlign: 'center'
    },
    closer = {
      position: 'relative',
      left: '94%',
      top: '-20%',
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
            <h3>{this.props.title}</h3>
            <br />
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}
