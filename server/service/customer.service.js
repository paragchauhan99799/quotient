const Customer = require('../model/customer.model');

exports.addCustomer = async (data) => await Customer.create(data);

exports.getAllCustomer = async () => await Customer.find({});