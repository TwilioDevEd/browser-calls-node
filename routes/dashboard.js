var express = require('express');
var router = express.Router();
var Ticket = require('../models/ticket');


// GET /dahsboard
router.get('/', function (req, res) {
  Ticket.find()
    .then(function (tickets) {
      res.render('dashboard/index', { tickets: tickets });
    });
});

module.exports = router;
