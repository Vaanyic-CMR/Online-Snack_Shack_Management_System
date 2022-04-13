const mongoose = require("mongoose");

const CamperSchema = new mongoose.Schema( {
    firstName: {
        type: String,
        required: [ true, "Camper must have a First Name" ],
        minlength: [ 3, "Name must be greater than 3 characters." ]
    },
    lastName: {
        type: String,
        required: [ true, "Camper must have a Last Name" ],
        minlength: [ 3, "Name must be greater than 3 characters." ]
    },
    gender: {
        type: String,
        required: [ true, "Camper must have a gender." ],
        enum: [ "male", "female" ]
    },
    camp: {
        type: String,
        required: [ true, "Camper must belong to an age group/camp." ],
        enum: [ "trekker", "pathfinder", "journey", "trail blazer", "navigator" ]
    },
    eow_remaing: {
        type: String,
        default: "return"
    },
    account: {
        type: mongoose.Types.ObjectId,
        ref: "Account"
    }
}, { timestamps: true } );

// Pre hook for `findOneAndUpdate`
CamperSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model( "Camper", CamperSchema );