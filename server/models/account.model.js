const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema( {
    camper: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Camper"
    },
    initBalance: {
        type: Number,
        required: [ true, "An initial balance is required." ]
    },
    currBalance: {
        type: Number,
    },
    currSpent: {
        type: Number,
        default: 0.0
    },
    totalDonation: {
        type: Number,
        default: 0.0
    },
    eowReturns: {
        type: Number,
        default: 0.0
    }
}, { timestamps: true } );

AccountSchema.pre("save", function(next) {
    this.currBalance = this.get("initBalance");
    next();
});

// Pre hook for `findOneAndUpdate`
AccountSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model( "Account", AccountSchema );