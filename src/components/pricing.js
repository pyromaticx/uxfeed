import React, {Component} from 'react';
import PaymentForm from './payment-form.js';
export default class PricingPage extends Component {
  constructor() {
    super();
    this.state = {
      planChosen: '',
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      team: '',
      phone: '',
    }
  }
  formChange(event) {
    switch(event.target.id) {
      case 'fname': {
        this.setState({
          firstName: event.target.value
        });
        break;
      }
      case 'lname': {
        this.setState({
          lastName: event.target.value
        });
        break;
      }
      case 'email': {
        this.setState({
          email: event.target.value
        });
        break;
      }
      case 'phone': {
        this.setState({
          phone: event.target.value
        });
        break;
      }
      case 'company': {
        this.setState({
          company: event.target.value
        });
        break;
      }
      case 'team': {
        this.setState({
          team: event.target.value
        });
        break;
      }
    }
  }
  verifyAndSubmit() {
    console.log(this.state)
  }
  render() {

    var pricingBoxWrapper = {
      border: '3px solid #e8e8e8',
      width: '100vw',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      textAlign: 'center',
      flexDirection: window.innerWidth < 850 ? 'column' : 'row',
      padding: '30px'
    },
    box = {
      backgroundColor: '#FFF',
      height: '100%',
      width: '100%',
      flex: 1,
      margin: '30px',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: '5px'
    },
    lines = {

    },
    linesBold = {
      fontWeight: '700'
    },
    titleHeadings = {
      marginLeft: '80px',
      fontWeight: '700'
    },
    headings = {
      fontWeight: '700'
    },
    priceBox = {
      width: '100%',
      height: '100px',
      fontSize: '100px',
      textAlign: 'center'
    },
    featureLines = {
      marginTop: '30px'
    },
    infoBox = {
      height: '200px',
      width: '90%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      borderRadius: '5px',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      border: '1px solid #ddd',
    },
    linesCol = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    salesForm = {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: '100%',
      minHeight: '500px',
      flexDirection: 'column',
      textAlign: 'center',
      borderRadius: '5px',
      marginTop: '20px',
      minWidth: '450px'
    },
    formRow = {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      flexWrap: 'wrap'
    },
    formItem = {
      width: '48%',
      margin: '1%',
    },
    freeTrial = {
      width: '100%',
      height: '350px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    featureForm = {
      width: '90%',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#fff',
      textAlign: 'center',
      marginBottom: '50px',
      borderRadius: '5px'
    },
    featureRow = {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      borderBottom: '1px solid #ddd',
      paddingTop: '10px',
      paddingBottom: '10px'
    },
    featureItemName = {
      width: '40%',
      padding: '5px'
    },
    featureItemValue = {
      width: '20%',
      padding: '5px'
    },
    featureChecks = {
      color: 'green'
    };


    return (
      <div>
        <h1 style={titleHeadings}>Choose a plan</h1>
        <div style={pricingBoxWrapper}>
          <div style={box}>
            <h5 style={headings}>Starter</h5>
            <div style={priceBox}>
              <p>$25</p>
            </div>
            <ul style={featureLines}>
              <li style={linesBold}>Per User / Per Month</li>
              <li style={lines}>Feature A</li>
              <li style={lines}>Feature B</li>
            </ul>
          </div>
          <div style={box}>
            <h5 style={headings}>Professional</h5>
            <div style={priceBox}>
              <p>$75</p>
            </div>
            <ul style={featureLines}>
            <li style={linesBold}>Per User / Per Month</li>
            <li style={lines}>Feature A</li>
            <li style={lines}>Feature B</li>
            </ul>
          </div>
          <div style={box}>
            <h5 style={headings}>Enterprise</h5>
            <div style={priceBox}>
              <p>$125</p>
            </div>
            <ul style={featureLines}>
            <li style={linesBold}>Per User / Per Month</li>
            <li style={lines}>Feature A</li>
            <li style={lines}>Feature B</li>
            </ul>
          </div>
        </div>
        <div style={infoBox}>
          <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '200px'}}>
            <span style={{fontSize: '80px'}} className="fa fa-trophy"></span>
          </div>
          <div style={linesCol}>
            <h5 style={linesBold}>ONBOARDING SERVICES THAT SET YOU UP FOR SUCCESS</h5>
            <h5>Let our team of in-house sales experts assist with data migration, account setup and training.</h5>
            <h6>SUCCESS PACKAGES START AT $1,000</h6>
          </div>
        </div>
        <div style={salesForm}>
          <h2 style={{margin: '20px'}}>Take the first step toward transforming your User Experience</h2>
          <h5 style={{marginBottom: '20px'}}>Start a conversation with a sales productivity expert</h5>
          <form>
            <div style={formRow}>
              <div style={formItem}>
                <label htmlFor="fname">First Name</label>
                <input className="form-control" id="fname" type='text' name="name" onChange={(event) => {this.formChange(event)}} />
              </div>
              <div style={formItem}>
                <label htmlFor="lname">Last Name</label>
                <input className="form-control" id="lname" type='text' name="name" onChange={(event) => {this.formChange(event)}} />
              </div>
            </div>
            <div style={formRow}>
              <div style={formItem}>
                <label htmlFor="email">Business Email</label>
                <input className="form-control" id="email" type='email' name="email" onChange={(event) => {this.formChange(event)}} />
              </div>
              <div style={formItem}>
                <label htmlFor="company">Company Name</label>
                <input className="form-control" id="company" type='text' name="company" onChange={(event) => {this.formChange(event)}} />
              </div>
            </div>
            <div style={formRow}>
              <div style={formItem}>
                <label htmlFor="phone">Phone Number</label>
                <input className="form-control" id="phone" type='phone' name="phone" onChange={(event) => {this.formChange(event)}} />
              </div>
              <div style={formItem}>
                <label htmlFor="team">Team Size</label>
                <input className="form-control" id="team" type='text' name="team" onChange={(event) => {this.formChange(event)}} />
              </div>
            </div>
            <button className="btn btn-default" onClick={() => {this.verifyAndSubmit()}} type='button'>Speak with an expert</button>
          </form>
        </div>
        <div style={freeTrial}>
          <h3>Or start your full featured 14-day free trial.</h3>
          <h5>No credit card required.</h5>
          <button className='btn btn-primary'>Try UxPass for free</button>
        </div>
        <div style={featureForm}>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p style={linesBold}>Feature</p>
            </div>
            <div style={featureItemValue}><p style={linesBold}>Starter</p></div>
            <div style={featureItemValue}><p style={linesBold}>Professional</p></div>
            <div style={featureItemValue}><p style={linesBold}>Enterprise</p></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 1</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 2</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 3</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 4</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 5</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 6</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 7</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
          <div style={featureRow}>
            <div style={featureItemName}>
              <p>Feature 8</p>
            </div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className=""></span></div>
            <div style={featureItemValue}><span style={featureChecks} className="fa fa-check-circle-o"></span></div>
          </div>
        </div>
      </div>
    );
  }
  planChoose(event) {
    this.setState({
      planChosen: event.target.id
    });
  }
}
