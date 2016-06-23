import React, {Component} from 'react';

export default class PaymentForm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  handleInputChange(event) {
    console.log(event.target.value)
  }
  render() {
    var wrapper = {
      border: '3px solid #e8e8e8',
      width: '90vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      textAlign: 'center',
      marginTop: '30px',
      flexDirection: 'column',
    },
    formStyle = {
      backgroundColor: '#fff',
      color: '#333',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '500px'
    },
    submitBtn = {

    },
    input = {
      width: '300px'
    };
    return (
    <div style={wrapper}>
      <h3>{this.props.plan == '' ? 'Please choose a plan above to continue!': 'Plan: ' + this.props.plan + ' selected'}</h3>

        <form style={formStyle} action="" method="POST" id="payment-form">
          <span className="payment-errors"></span>


            <label>
              <span>Card Number</span>
              <input style={input} type="text" size="20" data-stripe="number" />
            </label>
            <br/>
            <span>
              <label>
                <span style={{paddingRight: '20px'}}>Expiration (MM/YY)</span>
                <input type="text" size="2" data-stripe="exp_month" />
              </label>
              <span> / </span>
              <input type="text" size="2" data-stripe="exp_year" />

              <label>
                <span style={{paddingRight: '20px', paddingLeft: '57px'}}>CVC</span>
                <input type="text" size="4" data-stripe="cvc" />
              </label>
            </span>
            <br/>


          <input style={submitBtn} type="submit" className="submit" value="Submit Payment" />
        </form>

    </div>
  );
  }
}
