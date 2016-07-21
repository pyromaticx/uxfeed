import React, {Component} from 'react';
import api from './api/api.js';
export default class Verify extends Component {
  constructor() {
    super();
    this.state = {
      verification: "",
    }
  }
  componentDidMount() {
    api.verifyEmail(this.props.params.uuid).done((resp) => {
      console.log(resp);
    })
  }
  render() {

    return(
      <div>
        {this.state.verification}
      </div>

    );
  }
}
