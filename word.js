document.addEventListener("DOMContentLoaded", init);

// set up the objects

// Constructor function for Words object
function Word(noun, verb, adjective, color, number, movie, city) {
  this.noun = noun;
  this.verb = verb;
  this.adjective = adjective;
  this.color = color;
  this.number = number;
  this.movie = movie;
  this.city = city;
}

// define the array for each story
var story = new Array ();

function init() {
    console.log("in word.js");

    // test the instantiation of the object
    var words = new Word("automobile","run","large","purple","3","star wars","albuqquerque");
    console.log(words);
    
    console.log("stories: " + story);
}

