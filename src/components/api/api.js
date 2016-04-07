

var myInit = { method: 'GET',
               mode: 'cors',
               cache: 'default' };

var api = {
  baseUrl: 'http://hrboost.herokuapp.com',
  getUsers: function() {
    return fetch(this.baseUrl + '/users/', myInit).then(function (resp) {
      return resp.json()
    }).then(function(data) {
      console.log(data);
      return data;
    });
  }
}

export default api;
