import React, {Component} from 'react';

export default class PDFPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div style={{}}>
        <embed src={this.props.collection.exportURI} width='100%' height='100%' />
      </div>
    )
  }
}
