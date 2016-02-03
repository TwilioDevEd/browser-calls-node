var express = require('express');
var router = express.Router();
var twilio = require('twilio');

// POST /calls/connect
router.post('/connect', twilio.webhook({validate: false}), function(req, res, next) {
  var phoneNumber = req.body.phoneNumber;
  var callerId = process.env.TWILIO_PHONE_NUMBER;
  var twiml = new twilio.TwimlResponse();

  var numberDialer = function(dial) {
      dial.number(phoneNumber);
  };

  var clientDialer = function(dial) {
      dial.client("support_agent");
  };

  if (phoneNumber != null) {
    twiml.dial({callerId : callerId}, numberDialer);
  }else {
    twiml.dial({callerId : callerId}, clientDialer);
  }

  res.send(twiml);
});

module.exports = router;
