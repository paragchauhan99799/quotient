const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TableSchema = new Schema({
  restaurantId: {
    type: Schema.Types.ObjectId,
    ref: 'RestaurantSchema'
  },
  capacity: Number,
  available: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('Table', TableSchema);