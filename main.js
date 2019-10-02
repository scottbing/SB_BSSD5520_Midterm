document.addEventListener("DOMContentLoaded", init);


function init() {
    console.log("in main.js");
    
    resultDiv = document.getElementById("result");

    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", formSubmitted);
    
    var newPet = new Pet("Maggie","04/12/1995","KalKan",{});
    console.log(newPet);    
}


// form submitted function
function formSubmitted(e) {
    e.preventDefault();
    
    Pet.prototype = {
        constructor: Pet,
        sayHello: function(){
            return "make noise"
        }
    }
    
    // prototype overrides
    Dog.prototype.sayHello = function(){
        return "Bark, Bark, Bark";
    }
    
    Cat.prototype.sayHello = function(){
        return "Meow, Meow, Meow";
    }
    
    Cow.prototype.sayHello = function(){
        alert("Moo, Moo, Moo")
    }
    
    var dog = new Dog("Sophie");
    var cat = new Cat("Max");
    var cow = new Cow("Henrietta")
    
    console.log(dog.sayHello());
    console.log(cat.sayHello());
    console.log(cow.sayHello());
    
    // put sayHello() to an alert box
    var i = 0;
    // select the animal to be printed
    if(document.getElementById('animal1').checked){
            var i = 0;
            alert(dog.sayHello());
        }else if (document.getElementById('animal2').checked) {
            var i = 1;
            alert(cat.sayHello());
        }else if (document.getElementById('animal3').checked){
            var i = 2;
            alert(cow.sayHello());
        }
    
    // get user-entered values
    var name = document.forms["contact"]["name"].value;
    var birthday = document.forms["contact"]["birthday"].value;
    var food = document.forms["contact"]["food"].value;
    var activities = document.forms["contact"]["activities"].value;
    
    // validate name
    isEmpty(name, "Enter Pet's Name.");
    
    // validate birthday
    isEmpty(birthday, "Enter Pet's Birthday - mm-dd-yyyy.");
    // check the date format
    var isValid = isValidDate(birthday);
    console.log(isValid);
    if (!isValid) {
        alert("Please enter a date in this format: 'mm/dd//yy'.")
        exit();
    }
    
    // validate food
    isEmpty(food, "Enter Pet's Favorite Food");
    
    // validate activities
    isEmpty(activities, "Enter Pet's Activities - activity1,activity2,activity3,...");
    var isCommaSepValid = isValidCommaSep(activities);
    console.log(isCommaSepValid );
    if (!isValid) {
        alert("Please enter pet's activities in this format: activity1,activity2,activity3,...")
    }
    
    console.log("form submitted",name,birthday,food,activities);
    
    // create Pet object from form input
    var newPet = new Pet(name,birthday,food,activities);
    console.log("formSubmitted: " + newPet.name);
    
    // write resulting object to the screen
    writeSResults(newPet);
}

// validation helper function
//check if field is empty
function isEmpty(value, type) {
    if (value == "") {
        alert("Please  enter  "+type);
        exit();
    } 
}

//check if date is valid
function isValidDate(value) {
    // var pattern  =  "/^\\d{2}-\\d{2}-\\d{4}$/";
    var pattern = /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/;
    return  pattern.test(value);
}

//check if activities is comma spearated
function isValidCommaSep(value) {
    // var pattern  =  "/^\\d{2}-\\d{2}-\\d{4}$/";
    var pattern = /^(?:[a-zA-Z0-9 ]+,)*[a-zA-Z0-9 ]+$/;
    return  pattern.test(value);
}

function isPatternMatch(input) {
    console.log( input.value.match(input.pattern));
}

function writeSResults(newPet){
    console.log("writeSResults: " + newPet.name);
    
    var results = "";
    results += "    New Pet Object<br>";
    results += "    Name:  " + newPet.name;
    results += "    Birthday:  " + newPet.birthday;
    results += "    Favorite Food:  " + newPet.food;
    results += "    Activities:  " + newPet.activities;

resultDiv.innerHTML = results;
    
}