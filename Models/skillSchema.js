const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    skills : {
        type : String
    },
    level : {
        type : String
    }
})

const SkillsData = mongoose.model("SkillsData",userSchema);

module.exports = SkillsData;