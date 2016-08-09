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

  getUser: function(username, page) {
    if(!page) {
      var page = 0;
    }
    var config = {
                "async": true,
    						"crossDomain": true,
                "mode": "cors",
    						"method": "GET",
    						"process-data": false,
                "headers": {
                  "authorization": localStorage.getItem('auth'),
                  "page": page
                }
              };

    return fetch(this.baseUrl + 'annotations/user/' + username, config).then(function (resp) {
      return resp.json()
    });
  },
  annotations: function(page) {
    if(!page) {
      var page = 0;
    }
    var config = {
                "async": true,
    						"crossDomain": true,
                "mode": "cors",
    						"method": "GET",
    						"process-data": false,
                "headers": {
                  "authorization": localStorage.getItem('auth'),
                  "page": page
                }
              };
    return fetch(this.baseUrl + 'annotations/all', config).then(function(resp) {
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
  string2html: function(htmlString, fileName) {
    var settings = {
      "crossDomain": true,
      "url": "https://htmlntopdf.herokuapp.com/string2html",
      "method": "POST",
      "contentType": 'application/json',
      "data": JSON.stringify({
        htmlString: htmlString,
        fileName: fileName
      })
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
    var annoIdArray = annotations.map((anno) => {
      return anno.annotationId;
    });
    console.warn(annoIdArray)
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
        annotations: JSON.stringify(annoIdArray),
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
  searchAnnotations: function(term) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://uxpass-server.herokuapp.com/annotations/search/" + term,
      "method": "GET",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": localStorage.getItem('auth')
      }
  }
  return $.ajax(settings);
  },
  deleteAnnotation: function(id) {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://uxpass-server.herokuapp.com/annotations/delete/" + id,
        "method": "POST",
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "authorization": localStorage.getItem('auth')
        }
    }
    return $.ajax(settings);
  },
  editProfile: function(changes, id) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://uxpass-server.herokuapp.com/user/" + id + "/userProfile",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": localStorage.getItem('auth')
      },
      "data": changes
  }
  return $.ajax(settings);
  },
  getUserProfile: function(userName) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://uxpass-server.herokuapp.com/user/" + userName,
      "method": "GET",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": localStorage.getItem('auth')
      }
  }
  return $.ajax(settings);
  },
  sendShareEmail(emailInfo) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://htmlntopdf.herokuapp.com/email/collection",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
      },
      "data": {
        "emailTo": emailInfo.emailTo.toString(),
        "sender": emailInfo.sender,
        "urlTarget": emailInfo.urlTarget,
        "attachmentFiles": emailInfo.attachmentFiles
      }
  }
  return $.ajax(settings);

  },
  verifyEmail(uuid) {
    var settings = {
      "crossDomain": true,
      "url": "https://uxpass-server.herokuapp.com/user/verify/" + uuid,
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
      },
      "data": {
      }
    }
    return $.ajax(settings);
  },

  emailRohit: function(data) {
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
        "data": JSON.stringify(data)
    }
    return $.ajax(settings);
  },
}

export default api;
