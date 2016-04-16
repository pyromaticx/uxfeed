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

// var color = {
//   primary: '#ffffff',
//   secondary: '#7b1cf0',
//   tertiary: '#ccc',
//   four: '#fc8c4b',
//   text: '#464646',
//   textLight: '#EEE',
//   five: '#36BDB1',
//   six: '#235eef',
//   none: "none"
// };
/*

$color1: #FF4400;
$color2: #ff875b;
$color3: #ff875b;
$color4: #636363;
$color7: #dbdbdb;
$color5: #09c1b5;
$color6: white;
*/
var color = {
  primary: "#f9f9f9",
  secondary: "#ff875b",
  tertiary: "#197f7f",
  four: "#09c1b5",
  five: "#dbdbdb",
  six: "#09c1b5",
  text: "#464646",
  textLight: "#eee",

}

var Routes = (
  <Router history={history}>
    <Route path='/' component={App} color={color}>
      <IndexRoute component={Home} color={color} />
      <Route path='login' component={Login} color={color} />
      <Route path='username/:username' component={UserPage} color={color} />
      <Route path='annotations' component={UserPage} color={color} />
      <Route path='/pricing' component={PricingPage} color={color} />
    </Route>
  </Router>
);


ReactDOM.render(Routes, document.querySelector('#app'));
