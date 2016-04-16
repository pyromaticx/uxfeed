var chakram = require('chakram'),
    expect = chakram.expect;
var baseURL = 'http://hrboost.herokuapp.com'

describe("GET requests", function() {
    this.timeout(10000);
    it("Should be able to GET all public annotations", function () {
        var response = chakram.get(baseURL + '/annotations/');
        return expect(response).to.have.status(200);
    });
    it("Should be able to GET a specific annotation", function () {
        var response = chakram.get(baseURL + '/annotations/pinId?pinId=1');
        return expect(response).to.have.status(200);
    });
    it("Should be able to GET all users", function () {
        var response = chakram.get(baseURL + '/users/');
        return expect(response).to.have.status(200);
    });
    it("Should be able to GET a specific user", function () {
        var response = chakram.get(baseURL + '/users/2');
        return expect(response).to.have.status(200);
    });
    it("Should be able to GET a paginated data set of all annotations for a particular user for a particular website", function () {
        var response = chakram.get(baseURL + '/users/1/websites/1/annotations');
        return expect(response).to.have.status(200);
    });
    it("Should be able to GET a particular annotation data", function () {
        var response = chakram.get(baseURL + '/users/1/websites/1/annotations/2');
        return expect(response).to.have.status(200);
    });
    it("Should GET a paginated data set of all visits by a particular user for a particular website", function () {
        var response = chakram.get(baseURL + '/users/1/websites/1/history');
        return expect(response).to.have.status(200);
    });
    it("Should GET a list of annotations from a certain hashtag or topic", function () {
        var response = chakram.get(baseURL + '/annotation/topic/uxfeed');
        return expect(response).to.have.status(200);
    });

});

describe("POST requests", function() {
  it("Should be able to add a comment to an annotation", function() {
    var comment = {
      userName: 'chakramBro',
      comment: 'this commentary provided by Chakram',
      timestamp: '' + Date.now()
    };
    var response = chakram.post(baseURL + 'annotations/17/comments', comment);
    return expect(response).to.have.status(200);
  });
});
