// https://uxfbackend-pyromaticx.c9users.io/
// http://hrboost.herokuapp.com
var headers = new Headers();
var myInit = {
            "async": true,
						"crossDomain": true,
            "mode": "cors",
						"method": "GET",
						"process-data": false,
          };

var api = {
  baseUrl: 'https://uxpass.herokuapp.com/',
  getUser: function(username) {
    return fetch(this.baseUrl + 'annotations/user/' + username, myInit).then(function (resp) {
      return resp.json()
    });
  },
  annotations: function() {
    return fetch(this.baseUrl + 'annotations/all', myInit).then(function(resp) {
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
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    return $.ajax(settings);
  },
  html2pdf: function(htmlArray) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://pdf-service-pyromaticx.c9users.io/html2pdf",
      "method": "POST",
      "contentType": 'text/html',
      "data": htmlArray.toString()
    }
    return $.ajax(settings);
  }
}

export default api;
