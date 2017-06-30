var tableService = require('../service/table.service');

exports.addTable = async (req,res) => {
    try{
        const data = {
            restaurantId: req.params.restaurantId,
            capacity: req.body.capacity,
            available: req.body.available,
        }
        const TABLECREATED = await tableService.addTable(data);
        res.status(200).send(TABLECREATED);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.getAllTable = async (req,res) => {
    try{
        const GETALLTABLE = await tableService.getAllTable();
        res.status(200).send(GETALLTABLE);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.deleteTable = async (req,res) => {
    try{
        const tableId = req.params.tableId;
        const TABLEDELETED = await tableService.deleteTable(tableId);
        res.status(200).send(TABLEDELETED);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.updateTable = async (req,res) => {
    try {
        const updatedObject = await tableService.updateTable(req.params.tableId, req.body);
        res.status(200).send(updatedObject);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.findByCapacityForGivenRestaurant = async (req,res) => {
    try{
        const restaurantId = req.params.restaurantId;
        const capacity = req.params.capacity;
        console.log(restaurantId, capacity);
        const GETTABLE = await tableService.findByCapacityForGivenRestaurant(restaurantId, capacity);
        res.status(200).send(GETTABLE);
    } catch(err){
        res.status(400).send(err);
    }
}