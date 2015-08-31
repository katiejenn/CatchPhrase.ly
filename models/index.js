var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catchphrase_ly");

/* We grab our Words model from the file Phrases.js where it will be required by index.js on our server */
module.exports.Words = require("./words");
