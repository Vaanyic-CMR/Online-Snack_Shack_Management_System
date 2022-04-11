const Account = require("../models/account.model");

module.exports.getAllAccounts = (_req, res) => {
    Account.find({}).populate({ path: "camper", model:"Camper"})
        .then( accounts => res.json(accounts) )
        .catch( error => res.json(accounts) );
};

module.exports.getAccount = (req, res) => {
    Account.findOne( {_id: req.params.id} ).populate({ path: "camper", model:"Camper"})
        .then( account => res.json(account) )
        .catch( error => res.json(error) );
};

module.exports.deleteAccount = (req, res) => {
    Account.findOneAndDelete( {_id: req.params.id} )
        .then( confirmation => res.json(confirmation) )
        .catch( err => res.json(err) );
};