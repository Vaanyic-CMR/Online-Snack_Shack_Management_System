const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema( {
    name: {
        type: String,
        required: [ true, "Product name is required." ],
        minlength: [ 2, "Product name must be greater than 2 characters." ]
    },
    category: {
        type: String,
        required: [ true, "Product must belong to a category." ],
        enum: [ "food & drink", "clothing", "accessory", "other" ]
    },
    price: {
        type: Number,
        required: [ true, "Product must have a set price." ],
        min: [ 0.001, "Price must be greater than 0" ]
    }
}, { timestamps: true } );

// Pre hook for `findOneAndUpdate`
InventorySchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;
    next();
});

module.exports = mongoose.model( "Inventory", InventorySchema );