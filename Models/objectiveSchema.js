 const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
    objective : {
        type : String
    }
 });

 const ObjectiveData = mongoose.model("ObjectiveData",userSchema);

 module.exports = ObjectiveData;