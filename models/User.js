var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema =  new Schema({
    name: String,
    email: {type: String, unique: true},
    plan: String,

})

module.exports = mongoose.model("User", userSchema)