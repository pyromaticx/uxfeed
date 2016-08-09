import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, BrowserHistory, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home.js';
import UserPage from './components/userpage.js';
import Login from './components/login.js';
import PricingPage from './components/pricing.js';
import NewProject from './components/newproject';
import Verify from './components/verify.js';
var createHistory = require('history/lib/createHashHistory');

var history = new createHistory({
  queryKey: false
});
if(!localStorage.getItem('auth')) {
  console.log('bad auth')
  localStorage.user = "";
  localStorage.auth = "";
}
window.brendansFunc = () => {
  alert('All your base are belong to us.');
}
// colorKey is used to store the current selection of UI pallete.
var colorKey = 'uxfeed';
var currentUser = {};
/*if (localStorage.getItem('colorScheme')) {
  colorKey = localStorage.getItem('colorScheme');
} else {
  colorKey = 'orange';
}*/
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
       primary: "#bcd",
       secondary: "#123",
       tertiary: "#197f7f",
       four: "#789",
       five: "#999",
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
    case 'uxfeed': {
      return {
        primary: "#fff",
        secondary: "#333E48",
        tertiary: "#197f7f",
        four: "#11b14b",
        five: "#129dd9",
        six: "#f58333",
        seven: "#7f5a3",
        eight: "#ef3f2d",
        nine: "#f6ed51",
        text: "#464646",
        textLight: "#fff",
      }
    }
  }
}
// the callback that is passed down to allow pallete changes
function colorChanger(choice, callback) {
  colorKey = choice;
  localStorage.setItem('colorScheme', choice);
  if(callback) {
    callback(color());
  }
}

function userLoggedIn(userData) {
  currentUser = userData;
}


/*window.onhashchange = () => {
  location.reload();
}*/
var Routes = (
  <Router history={history}>
    <Route path='/' component={App} color={color()} colorChanger={(choice, cb) => {colorChanger(choice, cb)}}>
      <IndexRoute component={Home} color={color()} />
      <Route path='login' component={Login} color={color()} loginCB={(userData) => {userLoggedIn(userData)}}/>
      <Route path='username/:username' component={UserPage} color={color()} user={currentUser} />
      <Route path='collections/:collectionId' component={UserPage} color={color()} user={currentUser} />
      <Route path='annotations' component={UserPage} color={color()} user={currentUser} />
      <Route path='/pricing' component={PricingPage} color={color()} />
      <Route path='newproject' component={NewProject} color={color()} />
      <Route path='verify/:uuid' component={Verify} />
    </Route>
  </Router>
);


ReactDOM.render(Routes, document.querySelector('#app'));
