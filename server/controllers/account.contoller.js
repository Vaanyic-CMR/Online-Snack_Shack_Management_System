const Account = require("../models/account.model");

module.exports.getAccount = (req, res) => {
    Account.findOne( {_id: req.params.id} )
        .then( account => res.json(account) )
        .catch( error => res.json(error) );
};

module.exports.createAccount = (req, res) => {
    Account.create( req.body )
        .then( newAccount => newAccount )
        .catch( error => res.json(error) );
};

module.exports.updateCamper = (req, res) => {
    Camper.findOneAndUpdate( {_id: req.params.id}, req.body, {new: true} )
        .then( updatedCamper => res.json({ updatedCamper }) )
        .catch( error => res.status(400).json(error) );
};