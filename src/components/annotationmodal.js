import React, {Component} from 'react';

export default class AnnotationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: props.modalState,
      hovered: false
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      modalOpen: newProps.modalState
    });
  }
  toggleModal(event) {
    this.props.toggleModal(event);
  }
  contentClick(event) {
    event.stopPropagation();
  }
  handleMouseEnter(event) {
    console.log(event)
    this.setState({
      hovered: true,
      mouseX: event.clientX,
      mouseY: event.clientY,
    });
  }
  handleMouseLeave() {
    this.setState({
      hovered: false
    });
  }
  render() {
    var contentBox = document.getElementById('modalContent') || {};
    var overlayStyle = {
      display: this.state.modalOpen == 'open' ? 'flex' : 'none',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: this.state.modalOpen == 'open' ? 'rgba(50,50,50,0.8)' : 'transparent',
      transition: 'all 500ms ease',
      padding: '60px',
      zIndex: '9998',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modalContent = {
      display: this.state.modalOpen == 'open' ? 'flex' : 'none',
      backgroundColor: '#fff',
      width: '100%',
      minWidth: '940px',
      height: '100%',
      zIndex: '9999',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '1200px'
    },
    sidebar = {
      flex: '1',
      height: '100%',
      borderLeft: '1px solid ' + this.props.color.tertiary,

    },
    content = {
      display: 'flex',
      flex: '2',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',

    },
    closer = {
      fontSize: '30px',
      color: this.props.color.secondary,
      position: 'fixed',
      top: '10.5%',
      left: '92.5%'

    },
    annotationImage = {
      backgroundImage: this.props.annotation.image,
      backgroundPostion: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: this.props.annotation.imageW / 1.8,
      height: this.props.annotation.imageH / 1.8,
      border: '1px solid #333'
    },
    dotToolTip = {
      backgroundColor: this.props.color.secondary,
      padding: '20px',
      display: this.state.hovered == true ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      color: this.props.color.textLight,
      position: 'fixed',
      left: this.state.mouseX,
      top: this.state.mouseY,
    },
    thumbnailDotStyle = {
        position: 'relative',
        top: this.props.annotation.thumbnailDot.top,
        left: this.props.annotation.thumbnailDot.left,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: this.props.annotation.thumbnailDot.background
    };

    return (
      <div onClick={(event) => {this.toggleModal(event)}} style={overlayStyle}>
        <div id='modalContent' onClick={(event) => {this.contentClick(event)}} style={modalContent}>
          <div style={closer} onClick={(event) => {this.toggleModal(event)}} className='fa fa-close'></div>
          <div style={content}>
            <div style={annotationImage}>
              <div style={dotToolTip}>{this.props.annotation.text}</div>
              <div onMouseOver={(event) => {this.handleMouseEnter(event)}} onMouseLeave={() => {this.handleMouseLeave()}} style={thumbnailDotStyle}></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
