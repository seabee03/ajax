// Array of players
var players = ["Kawhi Leonard", "Tony Parker", "Kobe Bryant", "Lebron James", "Shaq"];

// 
function displayPlayerInfo() {

    // where api is
    var player = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + player + "&api_key=pM7BRdBRDkZ7zM5AjIWd4jim5DaQR31h&limit=1";

    // Ajax to get information
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        // Players to go here
        var playerDiv = $("<div class='player'>");

        // adding the rating
        // I AM STILL HAVING TROUBLE WITH THIS
        var rated = response.rating;
        var pOne = $("<p>").text("Rating: " + rated);
        playerDiv.append(pOne);

        // adding the image
        // I AM HAVING TROUBLE WITH THIS AS WELL
        var imgURL = response.original_still;
        var image = $("<img>").attr("src", imgURL);
        playerDiv.append(image);
        $("#players-view").prepend(playerDiv);
    });
}

// clears prior players before adding new players
function renderButtons() {
    $("#buttons-view").empty();

    // loop for players
    for (var i = 0; i < players.length; i++) {
        var a = $("<button>");
        a.addClass("player-btn");
        a.attr("data-name", players[i]);
        a.text(players[i]);
        $("#buttons-view").append(a);
    }
}

// adding a button click event
$("#add-player").on("click", function(event) {

    // prevents browser from refreshing
    event.preventDefault();
    var player = $("#player-input").val().trim();

    // adds players to the array
    players.push(player);
    renderButtons();
});

// "listens" for this event 
$(document).on("click", ".player-btn", displayPlayerInfo);
renderButtons();