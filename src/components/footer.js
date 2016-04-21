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
                color: this.props.color.primary
            },
            injectedJsxStyle = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                flexDirection: 'column'
            }
        return (
            <div style={footerStyle}>
                <FooterItem title='Copyright Info' content={(<span style={injectedJsxStyle}><h3>Other stuff</h3><h5>Some more stuff</h5></span>)} color={this.props.color}/>
                <FooterItem content={(<FooterSocial color={this.props.color} />)} color={this.props.color}/>
                <FooterItem title='UI Colors' content={(<ColorPicker colorChanger={this.props.colorChanger}/>)} color={this.props.color}/>
            </div>
        );
    }
}
