var express = require('express');
var router = express.Router();
var Ticket = require('../models/ticket');

// POST /tickets/new
router.post('/new', function (req, res) {
  var name = req.body.name;
  var description = req.body.description;
  var phoneNumber = req.body.phone_number;
  var createdAt = new Date();

  Ticket.create({ name: name, phoneNumber: phoneNumber, description: description, createdAt: createdAt })
    .then(function (savedTicket) {
      req.flash('success', 'Your ticket was submitted! An agent will call you soon.');
      res.redirect(201, '/home');
    })
    .catch(function (err) {
      req.flash('errors', 'Failed to create new ticket');
    })
    // .finally(function(){
    //   // console.log('$$ try to redirect...')
    //   // res.redirect('/home');
    // });

});

module.exports = router;
