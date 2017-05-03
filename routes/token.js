var express = require('express');
var router = express.Router();
var ClientCapability = require('twilio').jwt.ClientCapability;

// GET /token/generate
router.post('/generate', function (req, res) {
  var page = req.body.page;
  var clientName = (page == "/dashboard"? "support_agent" : "customer");

  var capability = new ClientCapability({
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN
  });
  capability.addScope(
    new ClientCapability.OutgoingClientScope({
      applicationSid: process.env.TWILIO_APP_SID}));
  capability.addScope(
    new ClientCapability.IncomingClientScope(clientName));

  var token = capability.toJwt();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ token: token }));
});

module.exports = router;
