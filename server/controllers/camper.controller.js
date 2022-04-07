const Camper = require("../models/camper.model");

module.exports.getAllCampers = (_req, res) => {
    Camper.find({})
        .then( campers => res.json(campers) )
        .catch( error => res.json(error) )
};

module.exports.getCampersByCamp = (req, res) => {
    Camper.find( {camp: req.params.camp} )
        .then( campers => res.json(campers) )
        .catch( error => res.json(error) );
};

module.exports.getCamper = (req, res) => {
    Camper.findOne( {_id: req.params.id} )
        .then( camper => res.json(camper) )
        .catch( error => res.json(error) );
};

module.exports.createCamper = (req, res) => {
    Camper.create( req.body )
        .then( newCamper => res.json(newCamper) )
        .catch( error => res.status(400).json(error) );
};

module.exports.updateCamper = (req, res) => {
    Camper.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true} )
        .then( updatedCamper => res.json({ updatedCamper }) )
        .catch( error => res.status(400).json(error) );
};

module.exports.deleteCamper = (req, res) => {
    Camper.findOneAndDelete( {_id: req.params.id} )
        .then( confirmation => res.json(confirmation) )
        .catch( err => res.json(err) );
};