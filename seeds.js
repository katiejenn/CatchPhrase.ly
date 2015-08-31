var db = require('./models');

var words = [
  {word: "CSS", definition: "Cascading Style Sheet"},
  {word: "HTML", definition: "The skeleton of the webpage"},
  {word: "Jquery", definition: "A Javascript library designed to make it easier to naviage a document"},
]


db.Words.remove({}, function(err, word){
	if(err)console.log(err);
	console.log(word + " deleted successfully!!!");
});


db.Words.create(words, function(err, words){
  if (err) { return console.log(err) };
  console.log("created", words.length, "words");
  console.log(words);
  process.exit();
});
 