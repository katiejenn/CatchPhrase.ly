/* Requiring mongoose */
var mongoose = require("mongoose");

/* Create a new Schema for Words */
var Schema = mongoose.Schema;
var WordSchema = new Schema({
    word: String,
    definition: String
});


/* Create a new model for Words */
var Words = mongoose.model('Words', WordSchema);
module.exports = Words;