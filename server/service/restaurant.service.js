const Restaurant = require('../model/restaurant.model');

exports.addRestaurant = async (data) => await Restaurant.create(data);

exports.getAllRestaurant = async () => await Restaurant.find({});

exports.deleteRestaurant = async (restaurantId) => {
    const deletedObject = await Restaurant.findOneAndRemove({ _id: restaurantId });
    console.log('Delete Object', deletedObject);
    return deletedObject;
}

exports.findByNameRestaurant = async (name) => {
    console.log(name);
    const restuarantObject = await Restaurant.find({name: name});
    console.log(restuarantObject);
    return restuarantObject;
}

exports.findByLocationRestaurant = async (location) => {
    console.log(location);
    const restuarantObject = await Restaurant.find({location: location});
    console.log(restuarantObject);
    return restuarantObject;
}

// findByCuisineRestaurant Not Working
exports.findByCuisineRestaurant = async (cuisine) => {
    console.log(cuisine);
    const restuarantObject = await Restaurant.find({
        cuisines: { $contains: cuisine },
    });
    console.log(restuarantObject);
    return restuarantObject;
}

exports.findByAll = async (name, location, cuisine) => {
    console.log(name, location, cuisine);
    const restuarantObject = await Restaurant.find({
        $and:[
            { name: name },
            { location: location },
            // { cuisine: { $contains: cuisine }}
        ],
    });
    console.log(restuarantObject);
    return restuarantObject;
}