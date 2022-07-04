const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    course : {
        type : String
    },
    university : {
        type : String
    },
    grade : {
        type : String
    },
    year : {
        type : String
    }
})

const Education = mongoose.model("Education",userSchema);

module.exports = Education;