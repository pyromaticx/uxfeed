import React, {Component} from 'react';
import PricingBoxOne from './pricingBoxOne';
import PricingBoxTwo from './pricingBoxTwo';
import PricingBoxThree from './pricingBoxThree';

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

    var row ={
      display: "flex",
      flexDirection: "row",
      width: "100%",
      flexWrap: "no-wrap",
      color: this.props.color.primary
    };

    var featuresStyles = {
      display: "flex",
      justifyContent: "center",
      marginTop: "50px"
    };
    var checkIconColor = {
      color: this.props.color.secondary
    }
    var box1styles = {
      marginTop: "25px",
      padding: "15px",
      border: "1px solid" + this.props.color.primary,
      width: "100%",
      height: "20em",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: this.props.color.six
    };
    var couponDiv = {
      backgroundColor: this.props.color.secondary,
      padding: "5px",
      display: "flex",
      justifyContent: "center",
      marginTop: "25px",
      boxShadow: "0 3px 15px 3px" + this.props.color.six
    };
    var couponStyles = {
      fontSize: "1.25em",
      fontWeight: "300",
      color: this.props.color.primary
    };
    var membershipStyles = {
      backgroundColor: this.props.color.tertiary,
      color: this.props.color.primary,
      border: "1px solid" + this.props.color.primary
    }
    var tableRowBGColor ={
      backgroundColor: this.props.color.four,
      border: "1px solid" + this.props.color.primary
    }
    var pricingBox = {
      free: {
        text: "Free Membership",
        payments: "$0/Month",
        salePitch: "Free Membership is good"
      },
      private: {
        text: "Private Membership",
        payments: "$15/Month",
        salePitch: "Private Membership is good"
      },
      superPrivate: {
        text: "Super Private",
        payments: "$30/Month",
        salePitch: "Super Private Membership is good"
      }
    };
    var borderWhite = {
      border: "1px solid" + this.props.color.primary
    };
    var tryItStyles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: this.props.color.five,
      padding: "50px"
    };
    var center = {
      display: "flex",
      justifyContent: "center"
    };
    return(
      <div style={pricingPageWrapper}>
        <div style={center}>
          <h2>uxFeed Pricing</h2>
        </div>
        <div style={couponDiv}>
          <p style={couponStyles}>First time user? use our coupon code "uxfeed brah" for a 2 month free trail</p>
        </div>
        <div style={row}>
          <PricingBoxOne
              color={this.props.color}
              text={pricingBox.free.text}
              payments={pricingBox.free.payments}
              pitch={pricingBox.free.salePitch}
          />
          <PricingBoxTwo
              color={this.props.color}
              text={pricingBox.private.text}
              payments={pricingBox.private.payments}
              pitch={pricingBox.private.salePitch}
          />
          <PricingBoxThree
              color={this.props.color}
              text={pricingBox.superPrivate.text}
              payments={pricingBox.superPrivate.payments}
              pitch={pricingBox.superPrivate.salePitch}
          />
        </div>
        <div style={featuresStyles}>
          <h3>All Features</h3>
        </div>
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th id="features">Features</th>
                <th style={membershipStyles} id="free">Free Membership</th>
                <th style={membershipStyles} id="private">Private Membership</th>
                <th style={membershipStyles} id="superPrivate">Super Private Membership</th>
              </tr>
            </thead>
            <tbody>
              <tr style={tableRowBGColor}>
                <th>Feature 1</th>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
              <tr>
                <th>Feature 2</th>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
              <tr style={tableRowBGColor}>
                <th>Feature 3</th>
                <td style={borderWhite}>asdf1</td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
              <tr>
                <th>Feature 4</th>
                <td style={borderWhite}>asdf1</td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
              <tr style={tableRowBGColor}>
                <th>Feature 5</th>
                <td style={borderWhite}>asdf1</td>
                <td style={borderWhite}>asdf2</td>
                <td style={borderWhite}><i style={checkIconColor} className="fa fa-check"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={tryItStyles}>
          <button className="btn btn-primary">Try It Now</button>
          <h3>Start your free trial with the coupon code "uxfeed brah"</h3>
          <p>No credit card required. Cancel anytime</p>
        </div>
      </div>
    );
  }
}
