const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    address : {
        type : String
    },
    email : {
        type : String 
    },
    phone : {
        type : String
    },
    photo : {
        type : String
    }
});

const PersonalDetail = mongoose.model("PersonalDetail",userSchema);

module.exports = PersonalDetail;