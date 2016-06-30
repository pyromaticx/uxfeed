import React, {Component} from 'react';
import FooterItem from './footer-item.js';
import FooterSocial from './footersocial.js';
import ColorPicker from './colorpicker.js';

export default class Footer extends Component {
    render() {
        var footerStyle = {
                height: '200px',
                width: '100%',
                backgroundColor: this.props.color.secondary,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                color: this.props.color.textLight
            },
            injectedJsxStyle = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column'
            }
        return (
            <div style={footerStyle}>
                <FooterItem title='UXPass' content={(
                  <span style={injectedJsxStyle}>
                    <a style={{color: '#fff', textDecoration: 'none'}} href='https://chrome.google.com/webstore/detail/ux-pass/mipcbibmecemipbooafkmlglpjbbmojb?utm_source=chrome-app-launcher-info-dialog'>
                      <h4>Get the Chrome extension</h4>
                    </a>
                  </span>)} color={this.props.color}/>
                <FooterItem content={(<FooterSocial color={this.props.color} />)} color={this.props.color}/>
                <FooterItem title='UI Colors' content={(<ColorPicker colorChanger={this.props.colorChanger}/>)} color={this.props.color}/>
            </div>
        );
    }
}
