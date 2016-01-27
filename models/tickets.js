var mongoose = require('mongoose');

var Ticket = new mongoose.Schema({
  name:String,
  phoneNumber: String,
  description: String
});

var agent = mongoose.model('ticket', Ticket);
module.exports = ticket;
