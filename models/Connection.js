var User = require("./User")
var mongoose = require("mongoose")
var Schema = mongoose.Schema;

var ConnectionSchema = new Schema({
    user: {type: mongoose.ObjectId, ref: User},
    shopifyTokem: String,
    slackToken: String
    
})

module.exports = mongoose.model("Connections", ConnectionSchema)