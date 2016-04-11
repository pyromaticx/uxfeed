import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, BrowserHistory, IndexRoute} from 'react-router';
import App from './components/app';
import Home from './components/home.js';
import UserPage from './components/userpage.js';
import Login from './components/login.js';

var createHistory = require('history/lib/createHashHistory');

var history = new createHistory({
  queryKey: false
});

var color = {
  bgColor: "#E7EAEC",
  primary: '#ffffff',
  secondary: '#7b1cf0',
  tertiary: '#ccc',
  four: '#fc8c4b',
  text: '#464646',
  textLight: '#EEE',
  teal: '#36BDB1',
  blue: '#235eef',
  none: "none"
};



var Routes = (
  <Router history={history}>
    <Route path='/' component={App} color={color}>
      <IndexRoute component={Home} color={color} />
      <Route path='/login' component={Login} color={color} />
      <Route path='username/:username' component={UserPage} color={color}/>
    </Route>
  </Router>
);


ReactDOM.render(Routes, document.querySelector('#app'));
