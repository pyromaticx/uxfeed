import React, {Component} from 'react';
import PaymentForm from './payment-form.js';
export default class PricingPage extends Component {
  constructor() {
    super();
    this.state = {
      planChosen: '',
    }
  }
  render() {
    var pricingBoxWrapper = {
      border: '3px solid #e8e8e8',
      width: '90vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      textAlign: 'center',
      flexDirection: window.innerWidth < 850 ? 'column' : 'row'
    },
    box1 = {
      backgroundColor: '#aaa',
      height: '100%',
      width: '100%',
      flex: 1,
    },
    box2 = {
      backgroundColor: '#ccc',
      height: '100%',
      width: '100%',
      flex: 1
    },
    box3 = {
      backgroundColor: '#eee',
      height: '100%',
      width: '100%',
      flex: 1
    },
    lines = {
      paddingTop: '20px',
      paddingBottom: '20px'
    },
    buttonFree = {
      width: '90%',
      height: '100px',
      backgroundColor: '#ddd',
      marginBottom: '30px'
    },
    buttonPower = {
      width: '90%',
      height: '100px',
      backgroundColor: '#bbb',
      marginBottom: '30px'
    },
    buttonPro = {
      width: '90%',
      height: '100px',
      backgroundColor: '#999',
      marginBottom: '30px'
    },
    headings = {
      marginTop: '20px',
      marginBottom: '20px'
    }


    return (
      <div>
        <h1 style={headings}>Choose a plan</h1>
        <div style={pricingBoxWrapper}>
          <div style={box1}>
            <h1 style={headings}>Free</h1>
            <ul>
              <li style={lines}>Only Public Annotations</li>
              <li style={lines}>Another Feature</li>
              <li style={lines}>Limited number of annotations</li>
            </ul>
            <button id='Free' type='button' className='btn' style={buttonFree} onClick={(event) => {this.planChoose(event)}}>Free</button>
          </div>
          <div style={box2}>
            <h1 style={headings}>Power User</h1>
            <ul>
              <li style={lines}>All Free Features</li>
              <li style={lines}>More Annotations</li>
              <li style={lines}>Report Generation</li>
            </ul>
            <button id='Power-User' type='button' className='btn' style={buttonPower} onClick={(event) => {this.planChoose(event)}}>Power User</button>
          </div>
          <div style={box3}>
            <h1 style={headings}>UX Pro</h1>
            <ul>
              <li style={lines}>All Power User Features</li>
              <li style={lines}>Unlimited Annotations</li>
              <li style={lines}>Some Secret Features</li>
            </ul>
            <button id='UXpro' type='button' className='btn' style={buttonPro} onClick={(event) => {this.planChoose(event)}}>UX Pro</button>
          </div>
        </div>
        <PaymentForm plan={this.state.planChosen}/>
      </div>
    );
  }
  planChoose(event) {
    this.setState({
      planChosen: event.target.id
    });
  }
}
