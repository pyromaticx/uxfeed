

var myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default' };

var api = {
  baseUrl: 'http://hrboost.herokuapp.com',
  getUser: function(username) {
    return fetch(this.baseUrl + '/users/' + username, myInit).then(function (resp) {
      return resp.json()
    }).then(function(data) {
      console.log(data);
      return data;
    });
  },
  annotations: function() {
    return fetch(this.baseUrl + '/annotations/', myInit).then(function(resp) {
      return resp.json();
    });
  }
}

export default api;
