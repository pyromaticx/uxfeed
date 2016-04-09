import React, {Component} from 'react';
import SpanItem from './spanitem.js';
import SlideBox from './slidebox.js';

export default class Home extends Component {
  render() {
    var jumboTron = {
      height: '90vh',
      width: '100%',
      borderBottom: '1px solid ' + this.props.route.color.tertiary,
      backgroundColor: this.props.route.color.four
    },
    landingStyle = {
      width: '100%',
      overflowX: 'hidden'
    },
    triSpanner = {
      height: '300px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    twoPanel = {
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: this.props.route.color.primary,
      padding: '40px',
      backgroundColor: this.props.route.color.teal,
      left: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: this.props.route.color.textLight
      },
      right: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
    }
    return (
      <div style={landingStyle}>
        <div style={jumboTron}>

        </div>
        <div style={triSpanner}>
          <SpanItem color={this.props.route.color} title='Lorem Ipsum' content="Lorem ipsum dolor. Sit amet leo. Malesuada odio ut. Sodales pellentesque odio."/>
          <SpanItem color={this.props.route.color} title='Lorem Ipsum' content="Suscipit arcu cras vel posuere eget. Quis ligula volutpat. Arcu nec vel."/>
          <SpanItem color={this.props.route.color} title='Lorem Ipsum' content="Magna in aenean phasellus sodales nec egestas tortor faucibus. Nullam justo volutpat."/>
        </div>
        <div style={twoPanel}>
          <div style={twoPanel.left}>
            <h3>Just list the facts</h3>
            <h3>Just list the facts</h3>
            <h3>Just list the facts</h3>
          </div>
          <div style={twoPanel.right}>
            <SlideBox color={this.props.route.color} />
          </div>
        </div>
      </div>
    );
  }
}
