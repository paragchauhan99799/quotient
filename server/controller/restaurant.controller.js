var restaurantService = require('../service/restaurant.service');

exports.addRestaurant = async (req,res) => {
    try{
        const data = {
            name: req.body.name,
            location: req.body.location,
            cusines: req.body.cusines,
        }
        const RESTAURANTCREATED = await restaurantService.addRestaurant(data);
        res.status(200).send(RESTAURANTCREATED);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.deleteRestaurant = async (req,res) => {
    try{
        const restaurantId = req.params.restaurantId;
        const RESTAURANTDELETED = await restaurantService.deleteRestaurant(restaurantId);
        res.status(200).send(RESTAURANTDELETED);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.getAllRestaurant = async (req,res) => {
    try{
        const GETALLRESTAURANT = await restaurantService.getAllRestaurant();
        res.status(200).send(GETALLRESTAURANT);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.findByNameRestaurant = async (req,res) => {
    try{
        const name = req.params.name;
        console.log(name);
        const GETRESTAURANT = await restaurantService.findByNameRestaurant(name);
        res.status(200).send(GETRESTAURANT);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.findByLocationRestaurant = async (req,res) => {
    try{
        const location = req.params.location;
        console.log(location);
        const GETRESTAURANT = await restaurantService.findByLocationRestaurant(location);
        res.status(200).send(GETRESTAURANT);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.findByCuisineRestaurant = async (req,res) => {
    try{
        const cuisine = req.params.cuisine;
        console.log(cuisine);
        const GETRESTAURANT = await restaurantService.findByCuisineRestaurant(cuisine);
        res.status(200).send(GETRESTAURANT);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.findByAll = async (req,res) => {
    try{
        const name = req.params.name;
        const location = req.params.location;
        const cuisine = req.params.cuisine;
        const GETRESTAURANT = await restaurantService.findByAll(name, location, cuisine);
        res.status(200).send(GETRESTAURANT);
    } catch(err){
        res.status(400).send(err);
    }
}