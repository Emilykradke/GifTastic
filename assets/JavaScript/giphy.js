var animals = ["dog", "penguin", "goldfish", "reindeer", "cat", "killer whale", "panda bear", "wolf", "racoon", "mouse"];

// function that takes each item in the array and makes a button for it
var createButton = function() {

    // Delete the animals before adding new animals 
    $("#buttons").empty()

    // loop through the array and make buttons for them
    for(var i = 0; i < animals.length; i++) {
        
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
createButton()
