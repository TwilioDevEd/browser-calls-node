var expect = require('chai').expect
  , supertest = require('supertest')
  , app = require('../app.js');

describe('token', function () {
  describe('POST /token/generate', function () {
    it('generates a token', function (done) {
      var agent = supertest(app);
      agent
        .post('/token/generate')
        .send({
          page: '/dashboard',
        })
        .expect(function (response) {
          expect(response.text).to.contain('{"token":"');
        })
        .expect(200, done);
    });
  });
});
