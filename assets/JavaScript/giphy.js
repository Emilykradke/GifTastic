
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
    createButton();
    // console.log the new animal
    console.log(newAnimal)

});

// on click of an animal button: 
$(document.body).on("click", "button", function() {
    var animalClicked = $(this).attr("data-name");
    // create the query URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalClicked + "&api_key=fk15UAOOrgq9oDZfXGgEc9XPVbDuh715&limit=10"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data
        
        // for loop to go through each item in response.data
        for (i = 0; i < results.length; i++) {
           
            // create an img div for the gif to go to
            var animalGif = $("<img>");
            animalGif.attr("src", results[i].images.fixed_height.url);
            // get the rating for each gif and set it to var rating
            var rating = results[i].rating;
            // put the rating in a p tag
            var p = $("<p>").text(`Rating: ${rating}`);
            // put the image div and the p div into the "#gifContainer" div
            $("#gifContainer").prepend(p);
            $("#gifContainer").prepend(animalGif);

        }
    })

})
    // play the gif when you click on it, stop the gif when you click it again

    // display the gif's rating

    // ***display the gif's title

    // ***display the gif's tags 
console.log(animals)
createButton();
