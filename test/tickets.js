var expect = require('chai').expect
  , supertest = require('supertest')
  , app = require('../app.js')
  , Ticket = require('../models/ticket');

describe('tickets', function () {
  describe('POST to /tickets/new', function () {
    it('creates a new ticket', function (done) {
      var agent = supertest(app);
      agent
        .post('/tickets/new')
        .send({
          name: 'Ticket',
          description: 'A simple ticket',
          phoneNumber: '+5555555'
        })
        .expect(201)
        .expect(function(res) {
          Ticket.find({}, function (err, tikets) {
            expect(tikets.length).to.equal(1);
          });
        })
        .end(function(err, res) {
          if (err) {
            throw err;
          }
        });
      done();
    });
  });
});
