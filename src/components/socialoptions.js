import React, {Component} from 'react';

export default class SocialOptions extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    console.warn(this.props.collection)
    return (
      <div>
        <span style={{fontSize: '20px', color: '#00aced'}} className='fa fa-twitter'></span>
        <span style={{fontSize: '20px', color: '#00aced'}} className='fa fa-facebook'></span>
        <span style={{fontSize: '20px', color: '#00aced'}} className='fa fa-linkedin'></span>
      </div>
    );
  }
}
