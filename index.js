// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    _ = require("underscore"),
    views = path.join(process.cwd(), "view/");

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));

// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

/* Hardcoded data for testing */
// var words = [
//   {_id: 0, word: "CSS", definition: "Cascading Style Sheet"},
//   {_id: 1, word: "HTML", definition: "The skeleton of the webpage"},
//   {_id: 2, word: "Jquery", definition: "A Javascript library designed to make it easier to naviage a document"},
// ]

var db = require('./models');

/* ROUTES HERE */
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});


app.get("/words", function (req, res){

  db.Words.find({}, function(err, words){
    if (err) 
    {
      console.log("BAD THING!");
      return res.sendStatus(400);
    } 
    res.send(words);
  })

});


app.post("/foods", function (req, res){

  db.Words.create({word: req.body.word, definition: req.body.definition},function(err, words){
    if(err)console.log(err);
    console.log(words);
    res.send(words);
  });

});


app.listen(3000, function (){
  console.log("listening on port 3000");
});