const mongoose = require("mongoose");
const toID = mongoose.Types.ObjectId;

const Camper = require("../models/camper.model");
const Account = require("../models/account.model");

module.exports.getAllCampers = (_req, res) => {
    Camper.find({}).populate({ path: "account", model:"Account"})
        .then( campers => res.json(campers) )
        .catch( error => res.json(error) )
};

module.exports.getCampersByCamp = (req, res) => {
    Camper.find( {camp: req.params.camp} ).populate({ path: "account", model:"Account"})
        .then( campers => res.json(campers) )
        .catch( error => res.json(error) );
};

module.exports.getCamper = (req, res) => {
    Camper.findOne( {_id: req.params.id} ).populate({ path: "account", model:"Account"})
        .then( camper => res.json(camper) )
        .catch( error => res.json(error) );
};

module.exports.createCamper = async (req, res) => {
    const { camper, account } = req.body;

    const newAccount = await Account.create( account )
        .catch( error => res.status(400).json(error) );
    const newCamper = await Camper.create( camper )
        .catch( error => res.status(400).json(error) );

    newCamper.account = toID(newAccount._id);
    newAccount.camper = toID(newCamper._id);
    newCamper.save();
    newAccount.save()
    res.json(newCamper);
};

module.exports.updateCamper = async (req, res) => {
    const { camper, account } = req.body;
    const c = await Camper.findById( req.params.id );

    await Account.findOneAndUpdate( {_id: c.account._id}, account, {new: true} )
        .catch( error => res.status(400).json(error) );
    updated = await Camper.findOneAndUpdate( {_id: req.params.id}, camper, {new: true} )
        .catch( error => res.status(400).json(error) );
    
    res.json(updated)
};

module.exports.deleteCamper = async (req, res) => {
    const camper = await Camper.findById( req.params.id )

    accountConfirm = await Account.findOneAndDelete({_id: camper.account})
        .catch( err => res.json(err) );
    camperConfirm = await Camper.findOneAndDelete( {_id: req.params.id} )
        .catch( err => res.json(err) );
    
    res.json( {camperConfirm, accountConfirm} );
};