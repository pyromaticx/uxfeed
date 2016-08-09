import React, {Component} from 'react';

export default class SlidesModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: ''
    }
  }
  render() {
    var wrapper = {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(100,100,100,0.5)',
      position: 'fixed',
      top: 0,
      zIndex: '1100',
    },
    modalBox = {
      height: '80%',
      width: '50%',
      backgroundColor: '#f9f9f9',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    };
    return (
      <div style={wrapper}>
        <div style={{width: '100%'}}>
          <span style={{position: 'absolute', fontSize: '30', left: '72%', top: '11%', zIndex: '1111'}} className='fa fa-times' onClick={() => this.props.close()}></span>
        </div>
        <div style={modalBox}>
          {this.props.fileName}
          {this.props.status}
          <a href={this.props.src} target="_blank"><button type='button' onClick={() => {}} >{this.props.type == 'pdf' ? 'View PDF' : 'View Slideshow'}</button></a>
          <button type='button' onClick={() => {

            var a = document.createElement('a');
            document.body.appendChild(a);
            a.style = 'display: none';
            a.href = this.props.src;
            a.download = this.props.fileName + ".html";
            a.click();
          }} >Download File</button>
        </div>
      </div>


    );
  }
}
