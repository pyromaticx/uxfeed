import React, {Component} from 'react';
import api from './api/api.js';
export default class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
  }
  goSearch(event) {
    event.preventDefault();
    event.stopPropagation();
    api.searchAnnotations(this.state.searchTerm).done((resp) => {
      console.log(resp);
      this.props.callback(resp);
    });
  }
  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  render() {
    var searchBox = {
      marginTop: '20px',
      marginBottom: '20px'
    }
    return (
      <form onSubmit={(event) => {this.goSearch(event)}} style={searchBox} className="input-group">
          <input type="text"
          className="form-control"
          placeholder="Search annotations"
          onChange={(event) => {this.handleInputChange(event)}}
          value={this.state.searchTerm}/>
          <span className="input-group-btn">
            <button style={{backgroundColor: this.props.color.secondary, color: '#fff'}} className="btn btn-default" type="submit">Search</button>
          </span>
      </form>
    );
  }
}
