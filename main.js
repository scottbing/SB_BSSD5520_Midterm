document.addEventListener("DOMContentLoaded", init);



function init() {
    console.log("in main.js:init()");
    
    // toggle forms
    document.getElementById("inputForm").style.display="block"; 
    document.getElementById("story").style.display="none"; 
    
    // register submit function
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", formSubmitted);
    
    // test the instantiation of the object
    var words = new Word("automobile","run","large","purple","3","star wars","albuqquerque");
    console.log(words);
    
    // story array
     story[0] = new Array ("A Shepherd " + words.noun + " tended his master's Sheep near a dark " +  words.noun + "not far from the village. Soon he " + words.verb + "life in the pasture very dull. All he could do to " + words.movie + " himself was to talk to his dog or play on his shepherd's pipe&#13;&#10;." +
     "One " + words.noun + " as he sat " + words.verb + "ing the Sheep and the quiet " + words.city + ", and thinking what he would do should he see a " + words.noun + ", he thought of a plan to " + words.verb + " himself.&#13;&#10;" +
     "His " + words.movie + " had told him to " + words.verb + " for help should a Wolf attack the " + words.color + ", and the Villagers would " + words.verb + " it away. So now, though he had not seen " + words.city + " that even looked like a Wolf, he ran toward the village shouting at the top of his voice, Wolf! Wolf!&#13;&#10;" +
     "As he expected, the " + words.noun + " who heard the " + words.number + " dropped their work and ran in great " + words.adjective + " to the pasture. But when they got there they found the Boy doubled up with laughter at the " + words.noun + " he had " + words.verb + "ed on them.&#13;&#10;" +
     "A " + words.adjective + " " + words.noun + "s later the Shepherd Boy again " + words.verb + "ed, Wolf! Wolf! Again the Villagers ran to " + words.verb + " him, only to be laughed at again.");
    
     story[1] = new Array ("A " + words.noun + " was making fun of the " + words.city + " one day for being so slow.&#13;&#10;" +
     "Do you ever get " + words.color + "? he asked with a mocking " + words.noun + ".&#13;&#10;" +
     "Yes, replied the " + words.city + ", and I get there sooner than you think. I'll " + words.verb + " you a race and prove it.&#13;&#10;" +
     "The Hare was much " + words.adjective + " at the idea of running a race with the " + words.color + ", but for the fun of the thing he agreed. So the " + words.movie + ", who had consented to act as " + words.noun + ", marked the distance and " + words.verb + "ed the runners off.&#13;&#10;" +
     "The " + words.movie + " was soon far out of " + words.city + ", and to make the " + words.color + " feel very deeply how " + words.adjective + " it was for him to " + words.verb + " a race with a Hare, he lay down beside the " + words.noun + " to take a " + words.movie + "until the " + words.city + " should catch up.&#13;&#10;" +
     "The " + words.color + " meanwhile kept " + words.verb +"ing slowly but steadily, and, after a " + words.noun + ", passed the place where the " + words.city + " was sleeping. But the " + words.city + " slept on very peacefully; and when at last he did " + words.verb + " up, the Tortoise was near the goal. The " + words.color + " now ran his swiftest, but he could not " + words.verb + " the " + words.movie + " in time.");
    
     story[2] = new Array ("I " + words.verb + " not, could not in a " + words.noun + ".&#13;&#10;" +
     "Not in a " + words.movie + "! You " + words.verb + " me be.&#13;&#10;" +
     "I do not " + words.verb + " " + words.color + " in a box.&#13;&#10;" +
     "I do not like " + words.city + " with a " + words.color + ".&#13;&#10;" +
     "I " + words.verb + " not like them in a " + words.number + "&#13;&#10;" +
     "I do not " + words.verb + " them with a mouse.&#13;&#10;" +
     + words.city + " do not like them " + words.noun + " or " + words.movie + ".&#13;&#10;" +
     "I do not like them " + words.color + ". I do not like " + words.adjective + " eggs and " + words.noun + ".&#13;&#10;" +
     "I would not " + words.verb + " them " + words.movie + " or " + words.city + ".&#13;&#10;" +
     "I would not eat them " + words.adjective + ".&#13;&#10;" +
     + words.noun + " would not eat " + words.color + " eggs and ham.");
    
    console.log("story:"+ story);

}

// form submitted function
function formSubmitted(e) {
    console.log("in main.js:formSubmitted()");
    
    e.preventDefault();
    
    // get user-entered values
    var noun = document.forms["inputForm"]["noun"].value;
    var verb = document.forms["inputForm"]["verb"].value;
    var adjective = document.forms["inputForm"]["adjective"].value;
    var color = document.forms["inputForm"]["color"].value;
    var number = document.forms["inputForm"]["number"].value;
    var movie = document.forms["inputForm"]["movie"].value;
    var city = document.forms["inputForm"]["city"].value;
    
    // create Pet object from form input
    var words = new Word(noun,verb,adjective,color,number,movie,city);
    console.log("formSubmitted: " + words);
    
    isEmpty(noun, "Enter a noun.");
    
    // validate verb
    isEmpty(verb, "Enter a verb.");
    
    // validate adjective
    isEmpty(adjective, "Enter an adjective");
    
    // validate color
    isEmpty(color, "Enter a color");
    
    // validate number
    isEmpty(number, "Enter a number");
    
    // validate movie
    isEmpty(movie, "Enter a movie");
    
    // validate city
    isEmpty(city, "Enter a city");
    
    writeSResults(words);
}

// validation helper function
//check if field is empty
function isEmpty(value, type) {
    if (value == "") {
        alert("Please  enter  "+type);
        //exit(1);
        if (window.stop) {
	        window.stop();
	    }
	    
	    throw '';
    } 
}



function writeSResults(words) {
    console.log("in writeResults:");
    
    /*//esting that the reandom was working
    for (var j=0; j<=10; j++) {
        // randomly select the next story
        var i = Math.floor(Math.random() * 3);      // returns a random integer from 0 to 2
    }*/
    for (var i = 0; i < story.length; i++) {
        if(story[i].checked)
   	        alert("story#" + i + "selected");
            var selectedStory = story[i].value;
    }
    /*// get user selection
    if (!document.querySelector('input[name="story"]:checked').value == null)
    var selection = document.querySelector('input[name="story"]:checked').value
    */
    // randomly select the next story
    var i = Math.floor(Math.random() * 3);      // returns a random integer from 0 to 2
    
     
    // write to textarea
    document.getElementById("madlib").innerHTML=story[i];
    
    //document.getElementById("madlib").innerHTML="Blah Blah&#13;&#10;Blah Blah";
    
// tooggle form visibility
    document.getElementById("inputForm").style.display="none"; 
    document.getElementById("story").style.display="block"; 
    
}