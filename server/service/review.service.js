const Review = require('../model/review.model');

exports.addReview = async (data) => await Review.create(data);

exports.getAllReview = async () => await Review.find({});