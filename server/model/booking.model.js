const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  tableId: String, /*{
    type: Schema.Types.ObjectId,
    ref: 'TableSchema'
  },*/
  customerId: String, /* {
    type: Schema.Types.ObjectId,
    ref: 'CustomerSchema'
  },*/
  time: {
    type: Date,
    default: new Date(),
  },
  status: {
    type: String,
    default: 'BOOKED',
  },
});

module.exports = mongoose.model('Booking', BookingSchema);