var reviewService = require('../service/review.service');

exports.addReview = async (req,res) => {
    try{
        const data = {
            restaurantId: req.body.restaurantId,
            customerId: req.body.customerId,
            review: req.body.review,
        }
        const REVIEWCREATED = await reviewService.addReview(data);
        res.status(200).send(REVIEWCREATED);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.getAllReview = async (req,res) => {
    try {
        const GETALLREVIEW = await reviewService.getAllReview();
        res.status(200).send(GETALLREVIEW);
    } catch(err) {
        res.status(400).send(err);
    }
}