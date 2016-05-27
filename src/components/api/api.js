// https://uxfbackend-pyromaticx.c9users.io/
// http://hrboost.herokuapp.com
var headers = new Headers();
var myInit = {
            "async": true,
						"crossDomain": true,
            "mode": "cors",
            "headers": headers,
						"method": "GET",
						"process-data": false,
          };

var api = {
  baseUrl: 'https://uxpass.herokuapp.com/',
  getUser: function(username) {
    return fetch(this.baseUrl + '/users/' + username, myInit).then(function (resp) {
      return resp.json()
    });
  },
  annotations: function() {
    return fetch(this.baseUrl + 'annotations', myInit).then(function(resp) {
      return resp.json();
    });
  },
  login: function(username, password) {
    var form = new FormData();
    form.append("userName", username);
    form.append("userPassword", password);

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://uxpass.herokuapp.com/user/login",
      "method": "POST",
      "headers": {
        "programid": "askdhfa",
        "cache-control": "no-cache",
        "postman-token": "0aa93dd4-2e94-7f9d-f73d-7ea82ef31c2e"
      },
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {
    alert(respsonse);
    });
  }
}

export default api;
