const Inventory = require("../models/inventory.model");

module.exports.getAll = (_req, res) => {
    Inventory.find({})
        .then( products => res.json(products) )
        .catch( error => res.json(error) )
};

module.exports.getOne = (req, res) => {
    Inventory.findOne( {_id: req.params.id} )
        .then( product => res.json(product) )
        .catch( error => res.json(error) );
};

module.exports.create = (req, res) => {
    Inventory.create( req.body )
        .then( newProduct => res.json(newProduct) )
        .catch( error => res.status(400).json(error) );
};

module.exports.update = (req, res) => {
    Inventory.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true} )
        .then( updatedProduct => res.json({ updatedProduct }) )
        .catch( error => res.status(400).json(error) );
};

module.exports.delete = (req, res) => {
    Inventory.findOneAndDelete( {_id: req.params.id} )
        .then( confirmation => res.json(confirmation) )
        .catch( err => res.json(err) );
};