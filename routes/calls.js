var express = require('express');
var router = express.Router();
var twilio = require('twilio');

// POST /calls/connect
router.post('/connect', twilio.webhook({validate: false}), function(req, res, next) {
  var phoneNumber = req.body.phoneNumber;
  var twiml = new twilio.TwimlResponse();

  var numberDialer = function(dial) {
      dial.number(phoneNumber);
  };

  var clientDialer = function(dial) {
      dial.client("support_agent");
  };

  if (phoneNumber != null) {
    twiml.dial({}, numberDialer);
  }else {
    twiml.dial({}, clientDialer);
  }

  res.send(twiml);
});

module.exports = router;
