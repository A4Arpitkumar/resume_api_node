const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    refereesName : {
        type : String
    },
    jobTile : {
        type : String
    },
    companyName : {
        type : String
    },
    email : {
        type : String
    },
    phone : {
        type : String
    }
});

const Reference = mongoose.model("Reference",userSchema);

module.exports = Reference;