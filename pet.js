//document.addEventListener("DOMContentLoaded", init);

// Constructor function for Person objects
function Pet(name,birthday,food,activities) {
  this.name = name;
  this.birthday = birthday;
  this.food = food;
  this.activities = activities;
    this.sayHello = function(){
    return "Hello my name is "+this.name+"!";
  }
}

// Define a Dog Constructor
function Dog(name){
  Pet.call(this, name);
  
  this.whatAmI = function() {
    return "I am a Dog."
  } 
}

console.log("constructor",Dog.prototype);

Dog.prototype = Object.create(Pet.prototype);

console.log("constructor", Dog.protoype);

// Define a Cat Constructor
function Cat(name){
  Pet.call(this, name);
  
  this.whatAmI = function() {
    return "I am a Cat."
  } 
}

console.log("constructor",Cat.prototype);

Cat.prototype = Object.create(Pet.prototype);

console.log("constructor", Cat.protoype);

// a Cow
function Cow(name){
  Pet.call(this, name);
  
  this.whatAmI = function() {
    return "I am a Cow."
  } 
}

console.log("constructor",Cow.prototype);

Cow.prototype = Object.create(Pet.prototype);

console.log("constructor", Cow.protoype);