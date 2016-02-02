var express = require('express');
var router = express.Router();
var Ticket = require('../models/ticket');


// GET /token/new
router.get('/new', function (req, res) {
  var capability = new twilio.Capability(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
  );

  Ticket.find()
    .then(function (tickets) {
      res.render('dashboard/index', { tickets });
    });
});

module.exports = router;
