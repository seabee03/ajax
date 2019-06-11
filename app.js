var animals = [
    "dog", "cat", "pig", "cow", "rabbit", "fly"
];
generateButtons();

function generateButtons() {
    $("#buttons-holder").empty();
    console.log("inside the generateButtons function")
    for (var i = 0; i < animals.length; i++) {
        var a = $("<button>");

        a.addClass("classToAdd");
        a.attr("data-type", animals[i]);
        a.text(animals[i]);
        console.log(a);
        $("#buttons-holder").append(a);

    }
}
$("#add").on("click", function(event) {
    event.preventDefault();
    var newAnimal = $("#animal-input").val();
    console.log(newAnimal);
    animals.push(newAnimal);
    generateButtons();
})
$(".classToAdd").on("click", function() {
    $("#results").empty();
    var type = $(this).attr("data-type");
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=pM7BRdBRDkZ7zM5AjIWd4jim5DaQR31h&limit=5"
    })
})