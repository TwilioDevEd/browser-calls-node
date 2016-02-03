var express = require('express');
var router = express.Router();
var twilio = require('twilio');

// GET /token/generate
router.post('/generate', function (req, res) {
  var page = req.body.page;
  console.log(process.env);

  var capability = new twilio.Capability(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
  );
  capability.allowClientOutgoing(process.env.TWILIO_APP_SID);

  var token = capability.generate(page === "/dashboard"? "support_agent" : "customer");
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ token: token }));
});

module.exports = router;
