const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('Customer', CustomerSchema);