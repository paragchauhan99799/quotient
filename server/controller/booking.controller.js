var bookingService = require('../service/booking.service');
var moment = require('moment');

exports.addBooking = async (req,res) => {
    try{
        const time = moment(req.body.time, "DD-MM-YYYY HH:mm")._d;
        const data = {
            tableId: req.body.tableId,
            customerId: req.body.customerId,
            status: req.body.status,
            time: time
        }
        const BOOINGCREATED = await bookingService.addBooking(data);
        res.status(200).send(BOOINGCREATED);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.getAllBookings = async (req,res) => {
    try {
        const GETALLBOOKINGS = await bookingService.getAllBookings();
        res.status(200).send(GETALLBOOKINGS);
    } catch(err) {
        res.status(400).send(err);
    }
}

exports.getBookingsForATable = async (req,res) => {
    try {
        const tableId = req.params.tableId;
        const startTime = moment(req.body.startTime , "DD-MM-YYYY HH:mm")._d;
        const endTime = moment(req.body.endTime, "DD-MM-YYYY HH:mm")._d;
        console.log(startTime, endTime);
        const GETBOOKINGS = await bookingService.getBookingsForATable(tableId, startTime, endTime);
        res.status(200).send(GETBOOKINGS);
    } catch(err) {
        res.status(400).send(err);
    }
}

exports.cancelBooking = async (req,res) => {
    try {
        const bookingId = req.params.bookingId;
        const data = {
            status:"CANCELLED"
        };
        const updatedObject = await bookingService.cancelBooking(bookingId, data);
        res.status(200).send(updatedObject);
    } catch(err){
        res.status(400).send(err);
    }
}