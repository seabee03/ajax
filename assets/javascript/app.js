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