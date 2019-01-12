
// array of animals that will be the buttons that start on the page 
var animals = ["dog", "penguin", "goldfish", "reindeer", "cat", "killer whale", "panda bear", "wolf", "racoon", "mouse"];


// function that takes each item in the array and makes a button for it
var createButton = function() {

    // Delete the animals before adding new animals 
    $("#buttons").empty()

    // loop through the array and make buttons for them
    for(var i = 0; i < animals.length; i++) {
        
        // create the button div
        var butt = $("<button>");
        // add a class of animal-button to the buttons
        butt.addClass("animal-button");
        // add a data attibute to the buttons
        butt.attr("data-name", animals[i]);
        // create the text for the buttons
        butt.text(animals[i]);
        // put the buttons into the html in the buttons div
        $("#buttons").append(butt);

    }
}

// on click of the submit button, take the html form input and push it to the 'animals' array
$(document.body).on("click", "#add-animal", function(){
    event.preventDefault();
    // Grab the input from the textbox
    var newAnimal = $("#animal-input").val().trim();
    // adding the animal input from the textbox to our "animals" array
    animals.push(newAnimal);
    // call the createButton function to process the new item that has been put into the animals array
    console.log(newAnimal)
    createButton();

});
// on click of an animal button: 

    // display 10 gifs related to that animal

        // play the gif when you click on it, stop the gif when you click it again

    // display the gif's rating

    // ***display the gif's title

    // ***display the gif's tags 
console.log(animals)
createButton();
