var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
exports.mongoConnection = mongoose.connect('mongodb://localhost/test');
