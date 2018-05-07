$(document).ready(function()   {

    $(".devour-this").on("click", function(event)   {
        var id = parseInt($(this).data("id"));
        console.log(typeof id);
        var newDevouredState = {
            devoured: 1
        };
        //send Put request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then( function() {
            console.log(newDevouredState.devoured);
            //reload the page
            location.reload();
        });
    });

    $("#build-burger-button").on("click", function(event)   {
            // Make sure to preventDefault on a submit event.
    event.preventDefault();
    

    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
    });
});