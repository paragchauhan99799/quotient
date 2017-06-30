const Booking = require('../model/booking.model');

exports.addBooking = async (data) => await Booking.create(data);

exports.getAllBookings = async () => await Booking.find({});

exports.cancelBooking = async (bookingId, data) => {
    const updatedObject = await Booking.findOneAndUpdate({ _id: bookingId }, data, { new: true });
    console.log('Updated Object', updatedObject);
    return updatedObject;
}

exports.getBookingsForATable = async (tableId, startTime, endTime) => {
    const tableObject = await Booking.find({
        $and: [
            { time: {
                $gte: startTime ,
            },},
            { time: {
                $lte: endTime,
            },},
            { tableId: tableId}
        ]
    });
    console.log(tableObject);
    return tableObject;
}