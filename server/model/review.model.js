const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  restaurantId: String, /*{
    type: Schema.Types.ObjectId,
    ref: 'RestuarantSchema'
  },*/
  customerId: String, /* {
    type: Schema.Types.ObjectId,
    ref: 'CustomerSchema'
  },*/
  review: Number
});

module.exports = mongoose.model('Review', ReviewSchema);