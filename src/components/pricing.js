import React, {Component} from 'react';

export default class PricingPage extends Component {
  render() {
    var pricingPageWrapper = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '50px',
      color: '#333',
      minHeight: '100vh',
      width: '100%'
    }
    return(
      <div style={pricingPageWrapper}>
        <span>GIVE US ALL YOUR MONEY!</span>
      </div>
    );
  }
}
