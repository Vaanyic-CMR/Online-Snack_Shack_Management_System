const mongoose = require("mongoose");
const toID = mongoose.Types.ObjectId;

const Camper = require("../models/camper.model");
const Account = require("../models/account.model");

module.exports.getAllCampers = (_req, res) => {
    Camper.find({})
        .populate({ path: "account", model:"Account"})
        .sort([['camp', -1], ['gender', -1], ['lastName', 1], ['firstName', 1]])
            .then( campers => res.json(campers) )
            .catch( error => res.json(error) )
};

module.exports.getCampersByCamp = (req, res) => {
    Camper.find( {camp: req.params.camp}, {_id: 1, firstName: 1, lastName:1} )
        .sort([['firstName', 1], ['lastName', 1]])
            .then( campers => res.json(campers) )
            .catch( error => res.json(error) );
};

module.exports.getCamper = (req, res) => {
    Camper.findOne( {_id: req.params.id} ).populate({ path: "account", model:"Account"})
        .then( camper => res.json(camper) )
        .catch( error => res.json(error) );
};

module.exports.createCamper = (req, res) => {
    const { camper, account } = req.body;
    
    Account.create( account )
        .then( newAccount => {
            Camper.create( camper )
            .then( newCamper => {
                newCamper.account = toID(newAccount._id);
                newAccount.camper = toID(newCamper._id);
                newCamper.save();
                newAccount.save();
                res.json("Success");
            })
            .catch( error => res.status(400).json(error) );
        })
        .catch( error => res.status(400).json(error) );
};

module.exports.updateCamper = (req, res) => {
    // console.log(req.body)
    const { camper, account } = req.body;

    Account.findOneAndUpdate( {_id: account._id}, account, {new: true} )
        .then( _updatedAccount => {
            Camper.findOneAndUpdate( {_id: req.params.id}, camper, {new: true} )
                .then( updatedCamper => res.json(updatedCamper) )
                .catch( error => res.status(400).json(error) );
        })
        .catch( error => res.status(400).json(error) );
};

module.exports.deleteCamper = async (req, res) => {
    const camper = await Camper.findById( req.params.id )

    accountConfirm = await Account.findOneAndDelete({_id: camper.account})
        .catch( err => res.json(err) );
    camperConfirm = await Camper.findOneAndDelete( {_id: req.params.id} )
        .catch( err => res.json(err) );
    
    res.json( {camperConfirm, accountConfirm} );
};