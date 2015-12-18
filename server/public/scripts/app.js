$(document).ready(function(){
    console.log("Meow! (Really would you have expected something else from me?");

    $(".clicky-button").on('click', clickyButton);


});

function clickyButton(){
    var data = {};

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(gremlins){
            data = gremlins;
            logData(data);
        }
    });


}

function logData(data){
    console.log(data);
    $(".container").append("<div class='normal'></div>");
    var $el = $(".container").children().last();
    var people = data.people;
    for(var i = 0; i < people.length ; i++) {
        $el.append("<p>" + people[i] + "</p>");
    }
}

