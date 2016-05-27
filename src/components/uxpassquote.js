import React, {Component} from 'react';

export default class UxpassQuote extends Component {
  render() {
    var clipImage = {
      width: '100px',
      height: '100px',
      //WebkitClipPath: 'polygon(230.3525000000% 155.8725000000%, 229.1575000000% 161.2750000000%, 229.1575000000% 163.8600000000%, 223.8200000000% 160.1300000000%, 230.3525000000% 155.8725000000%)',
    
    };
    return (
        <svg width="0" height="0" viewBox='100 100 100 100'>
        <div style={clipImage}></div>
          <defs>
            <clipPath id="uxpassQuote">
              <circle cx="0" cy="0" r="40" />
              <circle cx="60" cy="60" r="40" />
            </clipPath>
          </defs>
        </svg>
    );
  }
}
