var customerService = require('../service/customer.service');

exports.addCustomer = async (req,res) => {
    try{
        const data = {
            name: req.body.name,
        }
        const CUSTOMERCREATED = await customerService.addCustomer(data);
        res.status(200).send(CUSTOMERCREATED);
    } catch(err){
        res.status(400).send(err);
    }
}

exports.getAllCustomer = async (req,res) => {
    try{
        const GETALLCUSTOMER = await customerService.getAllCustomer();
        res.status(200).send(GETALLCUSTOMER);
    } catch(err){
        res.status(400).send(err);
    }
}