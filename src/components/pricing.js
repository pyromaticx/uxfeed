import React, {Component} from 'react';
import Footer from './footer';

export default class PricingPage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    var pricingPageWrapper = {
      display: 'flex',
      color: '#333',
      minHeight: '100vh',
      width: '80%',
      flexDirection: "column"
    };
    var couponDiv = {
      backgroundColor: this.props.route.color.secondary,
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      marginTop: "25px",
      boxShadow: "0 3px 15px 3px" + this.props.route.color.six
    };
    var couponStyles = {
      fontSize: "1.25em",
      fontWeight: "300",
      color: this.props.route.color.primary
    };
    var row ={
      display: "flex",
      flexDirection: "row",
      width: "100%",
      flexWrap: "no-wrap",
      color: this.props.route.color.primary
    };
    var box1styles = {
      marginTop: "25px",
      padding: "15px",
      border: "1px solid" + this.props.route.color.primary,
      width: "100%",
      height: "20em",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: this.props.route.color.six
    };
    var featuresStyles = {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px"
    };
    var checkIconColor = {
      color: this.props.route.color.secondary
    }

    return(
      <div style={pricingPageWrapper}>
        <div>
          <h2>uxFeed Pricing</h2>
        </div>
        <div style={couponDiv}>
          <p style={couponStyles}>First time user? use our coupon code "uxfeed brah" for a 2 month free trail</p>
        </div>
        <div style={row}>
          <div className="box1" style={box1styles}>
            <p>Free Membership</p>
            <h1>$0/Month</h1>
            <p>Free shit gets the good shit</p>
            <button className="btn btn-primary">Try Now</button>
          </div>
          <div className="box1" style={box1styles}>
            <p>Private</p>
            <h1>$15/Month</h1>
            <p>Free shit gets the good shit</p>
            <button className="btn btn-primary">Try Now</button>
          </div>
          <div className="box1" style={box1styles}>
            <p>Super Private</p>
            <h1>$30/Month</h1>
            <p>Free shit gets the good shit</p>
            <button className="btn btn-primary">Try Now</button>
          </div>
        </div>
        <div style={featuresStyles}>
          <h3>All Features</h3>
        </div>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th id="features">Features</th>
                <th id="free">Free Membership</th>
                <th id="private">Private Membership</th>
                <th id="superPrivate">Super Private Membership</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Feature 1</th>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
              <tr>
                <th>Feature 2</th>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
              <tr>
                <th>Feature 3</th>
                <td>asdf1</td>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
              <tr>
                <th>Feature 4</th>
                <td>asdf1</td>
                <td>asdf2</td>
                <td><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
