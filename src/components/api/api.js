// https://uxfbackend-pyromaticx.c9users.io/
// http://hrboost.herokuapp.com

var myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default' };

var api = {
  baseUrl: 'http://hrboost.herokuapp.com',
  getUser: function(username) {
    return fetch(this.baseUrl + '/users/' + username, myInit).then(function (resp) {
      return resp.json()
    });
  },
  annotations: function() {
    return fetch(this.baseUrl + '/annotations/', myInit).then(function(resp) {
      return resp.json();
    });
  }
}

export default api;
