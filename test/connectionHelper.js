var mongoose = require('mongoose');

mongoose.Promise = Promise;

var connStr = process.env.MONGO_URL;
if (!connStr) {
  throw new Error('MONGO_URL env variable is not defined.');
}

var conn;

if (mongoose.connections.length === 0) {
  conn = mongoose.connect(connStr);
} else {
  conn = mongoose.connections[0];
  if (!conn.host) {
    conn = mongoose.connect(connStr);
  }
}

exports.mongoConnection = conn;
