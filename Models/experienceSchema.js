const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    companyName : {
        type : String
    },
    jobTitle : {
        type : String
    },
    startDate : {
        type : String
    },
    endDate : {
        type : String
    },
    details : {
        type : String
    }
})

const Experience = mongoose.model("Experience",userSchema);

module.exports = Experience;