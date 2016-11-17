var express = require('express');
var router = express.Router();
var twilio = require('twilio');

// GET /token/generate
router.post('/generate', function (req, res) {
  var page = req.body.page;

  var capability = new twilio.jwt.Capability(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
  );
  capability.allowClientOutgoing(process.env.TWILIO_APP_SID);
  capability.allowClientIncoming(page == "/dashboard"? "support_agent" : "customer");

  var token = capability.generate();
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ token: token }));
});

module.exports = router;
