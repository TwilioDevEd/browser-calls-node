var express = require('express');
var router = express.Router();
var twilio = require('twilio');

router.post('/connects', twilio.webhook({validate: false}), function(req, res, next) {
  // req.param('phoneNumber');
  // var twiml = new twilio.TwimlResponse();

  // twiml.dial({
  //         action:'http://example.com/something.php'
  //     }, function(node) {
  //         node.conference('waitingRoom', {
  //         beep:'false'
  //     });
  // });
  //
  //
  //    twiml.gather({
  //        action: "/ivr/menu",
  //        numDigits: "1",
  //        method: "POST"
  //    }, function (node) {
  //        node.play("http://howtodocs.s3.amazonaws.com/et-phone.mp3", {loop: 3});
  //    });
  //    response.send(twiml);


  res.send('respond with a resource');
});

module.exports = router;
