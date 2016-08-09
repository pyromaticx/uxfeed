import React, {Component} from 'react';
import MenuItem from './menuitem.js';

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentActive: false
    }
  }
  setCurrentActive(active) {
    console.log(active);
    this.setState({
      currentActive: active
    });
  }
  render() {
    var barStyle = {
      width: '100%',
      minHeight: '80px',
      backgroundColor: this.props.color.primary,
      boxShadow: '0 3px 15px 1px #777',
      marginBottom: '20px'
    },
    barHeading = {
      height: '80px',
      backgroundColor: this.props.color.secondary,
      color: this.props.color.textLight,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '10px'
    },
    quoteLoc = {
      marginTop: '20px',
      zIndex: '1000'
    },
    listItemStyle = {
      padding: '0'
    },
    iconStyle = {
      height: '80px',
      width: '100%',
      color: this.props.color.primary,
      fontSize: "60px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    boss = {
      textShadow: '1px 1px 10px 1px ' + this.props.color.five,
      fontWeight: 700,
    }
    var listItems = this.props.content.map((el, idx) => {
      return (
        <MenuItem key={el.title + idx} idx={idx} changeActive={(active) => {this.setCurrentActive(active)}} active={idx === this.state.currentActive} color={this.props.color} activeColor={el.activeColor} title={el.title} value={el.value} activeText={el.activeText} callback={el.callback} button={el.button} buttonText={el.buttonText} />
      )
    });

    return (
      <div style={barStyle}>
        <div style={barHeading}>
          <img style={quoteLoc} src="/style/img/annotationWhiteB.svg" width="80px" />
          <h5 style={boss}>{this.props.title}</h5>
        </div>
        <div style={listItemStyle}>
          <ul>
          {listItems}
          </ul>
        </div>
      </div>
    );
  }
}
