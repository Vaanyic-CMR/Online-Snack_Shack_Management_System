const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ss_management_system", { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => console.log("Established connection to the database.") )
    .catch( err => console.log("Something went wrong when connecting to the database:", err) );