import React, {Component} from 'react';

export default class UserComment extends Component {
  constructor() {
    super();
    this.state = {
      commentBoxText: ''
    }
  }
  checkForEnter(event) {
    if(event.charCode == 13) {
      this.submitComment();
    }
  }
  handleInputChange(event) {
    this.setState({
      commentBoxText: event.target.value
    });
  }
  clickInput(event) {
    event.stopPropagation();
  }
  submitComment() {
    var commentObj = {
      username: this.props.user.name,
      comment: this.state.commentBoxText,
      timestamp: Date.now()
    }
    this.props.updateCommentsCB(commentObj);
    this.setState({
      commentBoxText: ''
    });
  }
  render() {
    var commentStyle = {
      marginTop: '15px',
      display: 'flex',
      width: '100%',
      minHeight: '50px',
      inputBox: {
        width: '100%',
        height: '40px'
      }
    }
    return (
      <div style={commentStyle}>
        <input style={commentStyle.inputBox} onClick={(event) => {this.clickInput(event)}} onKeyPress={(event) => {this.checkForEnter(event)}} onChange={(event) => {this.handleInputChange(event)}} type='text' placeholder='Enter comments here...' value={this.state.commentBoxText} />
      </div>
    );
  }
}
