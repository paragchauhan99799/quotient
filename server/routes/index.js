var express = require('express');
var router = express.Router();

var restaurantController = require('../controller/restaurant.controller');
var tableController = require('../controller/table.controller');
var customerController = require('../controller/customer.controller');
var bookingController = require('../controller/booking.controller');
var reviewController = require('../controller/review.controller');

// Restutant
router.post('/restaurant/add', restaurantController.addRestaurant);
router.get('/restaurant/getall', restaurantController.getAllRestaurant);
router.delete('/restaurant/delete/:restaurantId', restaurantController.deleteRestaurant);

router.get('/restaurant/findbyname/:name', restaurantController.findByNameRestaurant);
router.get('/restaurant/findbylocation/:location', restaurantController.findByLocationRestaurant);
router.get('/restaurant/findbycuisine/:cuisine', restaurantController.findByCuisineRestaurant);

router.get('/restaurant/findbyall/:name/:location/:cuisine', restaurantController.findByAll);

// Table
router.post('/table/add/:restaurantId', tableController.addTable);
router.get('/table/getall', tableController.getAllTable);
router.get('/table/findbycapacity/:restaurantId/:capacity', tableController.findByCapacityForGivenRestaurant);
router.delete('/table/delete/:tableId', tableController.deleteTable);
router.put('/table/update/:tableId', tableController.updateTable);

//Customer
router.post('/customer/add', customerController.addCustomer);
router.get('/customer/getall', customerController.getAllCustomer);

//Booking
router.post('/booking/add', bookingController.addBooking);
router.get('/booking/getall', bookingController.getAllBookings);
router.put('/booking/cancelbooking/:bookingId', bookingController.cancelBooking);

router.post('/booking/getbookingfortable/:tableId', bookingController.getBookingsForATable);

//Review
router.post('/review/add', reviewController.addReview);
router.get('/review/getall', reviewController.getAllReview);


module.exports = router;