var expect = require('chai').expect
  , supertest = require('supertest')
  , app = require('../app.js')
  , Ticket = require('../models/ticket');

describe('tickets', function () {
  describe('POST to /tickets/new', function () {
    it('creates a new ticket', function () {
      var agent = supertest(app);
      return agent
        .post('/tickets/new')
        .send({
          name: 'Ticket',
          description: 'A simple ticket',
          phoneNumber: '+5555555'
        })
        .expect(201)
        .expect(function(res) {
          return Ticket.find({})
            .then(() => {
              expect(tikets.length).to.equal(1);
            });
        });
    });
  });
});
