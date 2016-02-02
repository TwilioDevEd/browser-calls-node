var mongoose = require('mongoose');

var Ticket = new mongoose.Schema({
  name:String,
  phoneNumber: String,
  description: String,
  createdAt : Date
});

var ticket = mongoose.model('ticket', Ticket);
module.exports = ticket;
