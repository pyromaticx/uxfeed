import React, {Component} from 'react';

export default class FilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded
    }
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      expanded: newProps.expanded
    });
  }
  handleClick() {
    console.log('filterbar')
    this.props.expandCB();
  }
  render() {
    var filterBar = {
      height: '80px',
      width: '100%',
      display: this.props.displayed == true ? 'flex' : 'none',
      backgroundColor: this.props.color.secondary,
      marginBottom: '25px',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: '5px',
      color: this.props.color.primary,
      fontSize: '40px'
    };
    return (
      <div onClick={() => {this.handleClick()}} style={filterBar}>
        {this.state.expanded ? 'Collapse All' : 'Expand All'}
      </div>
    );
  }
}
