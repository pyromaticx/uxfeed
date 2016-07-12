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
        <span className='fa fa-twitter'></span>
      </div>
    );
  }
}
