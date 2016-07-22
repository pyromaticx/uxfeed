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
    switch(this.props.path) {
      case "username/:username": {
        api.searchAnnotations(this.state.searchTerm).done((resp) => {
          console.log(resp);
          this.props.callback(resp);
        });
        break;
      }
      case 'collections/:collectionId': {
        var annotations = JSON.parse(this.props.collection.annotations);
        var found = [];
        for(var i = 0; i < annotations.length; i++) {
          var an = annotations[i].annotationTitle + ' ' + annotations[i].annotationText;
          if(an.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) != -1) {
            found.push(annotations[i]);
            console.log(annotations[i]);
          }
        }
        this.props.callback(found);
      }
    }
  }
  handleInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
    /*api.searchAnnotations(event.target.value).done((resp) => {
      console.log(resp);
      this.props.callback(resp);
    }))*/
  }
  render() {
    var searchBox = {
      width: '100%',
      marginBottom: '20px'
    }
    return (
      <form onSubmit={(event) => {this.goSearch(event)}} style={searchBox} className="input-group">
          <input type="text"
          className="form-control"
          placeholder={this.props.path == "username/:username" ? "Search annotations" : "Search Collection Annotations"}
          onChange={(event) => {this.handleInputChange(event)}}
          value={this.state.searchTerm}/>
          <span className="input-group-btn">
            <button style={{backgroundColor: this.props.color.primary, color: '#333'}} className="btn btn-default" type="submit">Search</button>
          </span>
      </form>
    );
  }
}
