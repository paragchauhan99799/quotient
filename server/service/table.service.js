const Table = require('../model/table.model');

exports.addTable = async (data) => await Table.create(data);

exports.getAllTable = async () => await Table.find({});

exports.deleteTable = async (tableId) => {
    const deletedObject = await Table.findOneAndRemove({ _id: tableId });
    console.log('Delete Object', deletedObject);
    return deletedObject;
}

exports.updateTable = async (tableId, data) => {
    const updatedObject = await Table.findOneAndUpdate({ _id: tableId }, data, { new: true });
    console.log('Updated Object', updatedObject);
    return updatedObject;
}

exports.findByCapacityForGivenRestaurant = async (restaurantId, capacity) => {
    const tableObject = await Table.find({
        $and: [
            { restaurantId: restaurantId },
            { capacity: capacity }
        ]
    });
    console.log(tableObject);
    return tableObject;
}