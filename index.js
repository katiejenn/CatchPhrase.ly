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

app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

app.get("/foods", function (req, res){
  // render foods index as JSON
  db.Food.find({}, function(err, foods){
    if (err) 
    {
      console.log("BAD THING!");
      return res.sendStatus(400);
    } 
    res.send(foods);
  })
});

app.listen(3000, function (){
  console.log("listening on port 3000");
});