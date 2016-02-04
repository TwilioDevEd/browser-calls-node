require('./connectionHelper');

var expect = require('chai').expect
  , supertest = require('supertest')
  , app = require('../app.js')
  , Ticket = require('../models/ticket');

describe('dashboard', function () {
  before(function (done) {
    Ticket.create({
      name: 'Ticket',
      phoneNumber: '+567899043',
      description: 'A simple ticket',
      createdAt : new Date()
    })
    .then(function (ticket) {
      done();
    });
  });

  after(function (done) {
    Ticket.remove({}, done);
  });

  describe('GET /dashboard', function () {
    it('list all tickets', function (done) {
      var agent = supertest(app);
      agent
        .get('/dashboard')
        .expect(function (response) {
          expect(response.text).to.contain('Tickets');
          expect(response.text).to.contain('+567899043');
          expect(response.text).to.contain('A simple ticket');
        })
        .expect(200, done);
    });
  });
});
