const express = require('express');
const router = express.Router();

const AccessToken = require('twilio').jwt.AccessToken;
const VoiceGrant = AccessToken.VoiceGrant;

const config = require('../config');

// GET /token/generate
router.post('/generate', function (req, res) {
  const page = req.body.page;
  const clientName = (page == "/dashboard"? "support_agent" : "customer");

  const accessToken = new AccessToken(config.accountSid, config.apiKey, config.apiSecret);
  accessToken.identity = clientName;

  const grant = new VoiceGrant({
    outgoingApplicationSid: config.appSid,
    incomingAllow: true,
  });
  accessToken.addGrant(grant);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ token: accessToken.toJwt() }));
});

module.exports = router;
