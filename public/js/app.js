// On page load
$(function() {

  //pageLoad();
  renderWords(words);
});

/*
function pageLoad()
{
  console.log("TEST SUCCESS!!!");
}
*/

/* Hard coded data for testing purposes */
var words = [
  {_id: 0, word: "CSS", definition: "Cascading Style Sheet"},
  {_id: 1, word: "HTML", definition: "The skeleton of the webpage"},
  {_id: 2, word: "Jquery", definition: "A Javascript library designed to make it easier to naviage a document"},
]

// function definitions
// function pageLoad() {
//   // load foods
//   getFoods();
//   // set event listeners
//   $("#new-food-form").on("submit", function(e){
//     // prevent form submission
//     e.preventDefault();
//     // post to food#create
//     $.post("/foods", $(this).serialize())
//       .done(function(res){
//         // append new food to the page
//         getFoods();
//         $("#new-food-form")[0].reset();
//       });
//   });
// }


// function getFoods() {
//   $.get("/foods", function(res){
//     var foods = res.reverse();
//     // grab foods template
//     renderFoods(foods)
//   });
// }

/* The action of posting the words onto the page */
function renderWords(words) {
  template = _.template($("#words-template").html());
  // input foods into template and append to parent
  wordItems = words.map(function(word) {
    return template(word);
  });
  // clear content (for repeated use)
  $("#word_buttons").html("");
  // append foods to ul
  $("#word_buttons").append(wordItems);
}







