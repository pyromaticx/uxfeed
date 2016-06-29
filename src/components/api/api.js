// https://uxfbackend-pyromaticx.c9users.io/
// http://hrboost.herokuapp.com
var headers = new Headers();
var myInit = {
            "async": true,
						"crossDomain": true,
            "mode": "cors",
						"method": "GET",
						"process-data": false,
            "headers": {
              "authorization": localStorage.getItem('auth')
            }
          };

var api = {
  baseUrl: 'https://uxpass-server.herokuapp.com/',

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
      "url": "https://uxpass-server.herokuapp.com/user/login",
      "method": "POST",
      "processData": false,
      "contentType": false,
      "mimeType": "multipart/form-data",
      "data": form
    }

    return $.ajax(settings);
  },
  html2pdf: function(htmlArray, fileName) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://htmlntopdf.herokuapp.com/html2pdf",
      "method": "POST",
      "contentType": 'application/json',
      "data": JSON.stringify({
        htmlString: htmlArray.toString(),
        fileName: fileName
      })
    }
    return $.ajax(settings);
  },
  addToUserCollections: function(userName, annotations, exportURI, fileName) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://uxpass-server.herokuapp.com/user/" + userName + "/collections",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": localStorage.getItem('auth')
      },
      "data": {
        annotations: JSON.stringify(annotations),
        exportURI: exportURI,
        fileName: fileName
      }
  }
  return $.ajax(settings);
  },
  getUserCollections: function(userName) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://uxpass-server.herokuapp.com/user/" + userName + "/collections",
      "method": "GET",
      "headers": {
        "authorization": localStorage.getItem('auth')
      }
  }
  return $.ajax(settings);
  },
  getCollectionAnnotations: function(collectionId) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://uxpass-server.herokuapp.com/user/collections/" + collectionId,
      "method": "GET",
      "headers": {
        "authorization": localStorage.getItem('auth')
      }
  }
  return $.ajax(settings);
},
  emailRohit: function(name, email, company) {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://htmlntopdf.herokuapp.com/signup",
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        "processData": false,
        "data": JSON.stringify({name: name, email: email, company: company})
    }
    return $.ajax(settings);
  }
}

export default api;
