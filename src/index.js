import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, BrowserHistory} from 'react-router';
import App from './components/app';
import UserPage from './components/userpage.js';

var createHistory = require('history/lib/createHashHistory');

var history = new createHistory({
  queryKey: false
});

var color = {
  primary: '#ffffff',
  secondary: '#7b1cf0',
  tertiary: '#ccc',
  text: '#464646',
  textLight: '#EEE'
}


var Routes = (
  <Router history={history}>
    <Route path='/' component={App} color={color}>
      <Route path='username' component={UserPage} color={color}/>
    </Route>
  </Router>
)


ReactDOM.render(Routes, document.querySelector('#app'));
