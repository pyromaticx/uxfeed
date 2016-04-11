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
        var response = chakram.get(baseURL + '/annotations/1');
        return expect(response).to.have.status(200);
    });
    it("Should be able to GET all users", function () {
        var response = chakram.get(baseURL + '/users');
        return expect(response).to.have.status(200);
    });
    it("Should be able to GET all of a specific users annotations", function () {
        var response = chakram.get(baseURL + '/users/1');
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

});
