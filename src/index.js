import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, BrowserHistory, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home.js';
import UserPage from './components/userpage.js';
import Login from './components/login.js';
import PricingPage from './components/pricing.js';

var createHistory = require('history/lib/createHashHistory');

var history = new createHistory({
  queryKey: false
});
// colorKey is used to store the current selection of UI pallete. TODO -- save and reload from local storage
var colorKey = 'orange';
// returns the correct color obj according to the value of colorKey
function color() {
  switch (colorKey) {
    case 'orange':
      return {
      primary: "#f9f9f9",
      secondary: "#ff875b",
      tertiary: "#197f7f",
      four: "#09c1b5",
      five: "#dbdbdb",
      six: "#09c1b5",
      text: "#464646",
      textLight: "#eee",
      };
    case 'dark': {
      return {
       primary: "#abc",
       secondary: "#123",
       tertiary: "#456",
       four: "#789",
       five: "#0ab",
       six: "#cde",
       text: "#f01",
       textLight: "#fff",
     };
    }
    case 'pink': {
      return {
        primary: "#fff",
        secondary: "#FF4566",
        tertiary: "#197f7f",
        four: "#09c1b5",
        five: "#dbdbdb",
        six: "#09c1b5",
        text: "#464646",
        textLight: "#fff",
      };
    }
    case 'green': {
      return {
        primary: "#fff",
        secondary: "#4CD864",
        tertiary: "#197f7f",
        four: "#09c1b5",
        five: "#dbdbdb",
        six: "#09c1b5",
        text: "#464646",
        textLight: "#fff",
      }
    }
    case 'teal': {
      return {
        primary: "#fff",
        secondary: "#55E1B5",
        tertiary: "#197f7f",
        four: "#09c1b5",
        five: "#dbdbdb",
        six: "#09c1b5",
        text: "#464646",
        textLight: "#fff",
      }
    }
    case 'purple': {
      return {
        primary: "#fff",
        secondary: "#7B72E9",
        tertiary: "#197f7f",
        four: "#09c1b5",
        five: "#dbdbdb",
        six: "#09c1b5",
        text: "#464646",
        textLight: "#fff",
      }
    }
  }
}
// the callback that is passed down to allow pallete changes
function colorChanger(choice, callback) {
  colorKey = choice;
  if(callback) {
    callback(color());
  }
}

var Routes = (
  <Router history={history}>
    <Route path='/' component={App} color={color()} colorChanger={(choice, cb) => {colorChanger(choice, cb)}}>
      <IndexRoute component={Home} color={color()} />
      <Route path='login' component={Login} color={color()} />
      <Route path='username/:username' component={UserPage} color={color()} />
      <Route path='annotations' component={UserPage} color={color()} />
      <Route path='/pricing' component={PricingPage} color={color()} />
    </Route>
  </Router>
);


ReactDOM.render(Routes, document.querySelector('#app'));
