// Array of players
var players = ["Kawhi Leonard", "Tony Parker", "Kobe Bryant", "Lebron James", "Shaq"];

function displayPlayerInfo() {
    var player = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + player "&api_key=pM7BRdBRDkZ7zM5AjIWd4jim5DaQR31h&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).them(function(response) {
        var playerDiv = $("<div class='player'>");
        var rating = response.Rated;
        var pOne = $("<p>").text("Rating: " + rating);
        playerDiv.append(pOne);
        var imgURL = $("<img>").attr("src", imgURL);
        playerDiv.append(image);
        $("#players-view").prepend(playerDiv);
    });
}

function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < players.length; i++) {
        var a = $("<button>");
        a.addClass("player-btn");
        a.attr("data-name", players[i]);
        a.text(players[i]);
        $("#buttons-view").append(a);
    }
}