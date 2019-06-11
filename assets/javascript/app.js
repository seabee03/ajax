// Topic is sports players
var player = [
    "Kawhi Leonard", "Lebron James", "Payton Manning", "Gerard Butler", "Cam Newton"
];
generateButtons();

// This will generate the buttons for the players listed already in the topic
function generateButtons() {
    $("#buttons-holder").empty();
    console.log("inside the generateButtons function")
    for (var i = 0; i < player.length; i++) {
        var a = $("<button>");
        a.addClass("classToAdd");
        a.attr("data-type", player[i]);
        a.text(player[i]);
        console.log(a);
        $("#buttons-holder").append(a);
    }
}

// adding the event "click"
$("#add").on("click", function(event) {
    // Prevents browser from refreshing and prevents repeating buttons
    event.preventDefault();
    // allows for user to add a new player
    var newPlayer = $("#player-input").val();
    console.log(newPlayer);
    // pushes the information to the generateButtons function
    player.push(newPlayer);
    generateButtons();

})

// creating function for ajax to "GET"
$(".classToAdd").on("click", function() {
    $("#results").empty();
    var queryURL = $(this).attr("data-type");
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=pM7BRdBRDkZ7zM5AjIWd4jim5DaQR31h&limit=5",
        method: "GET"
    }).then(function(response) {
        var results = response.data;
    })
})