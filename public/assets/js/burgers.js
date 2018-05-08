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

    $(".create-new-burger").on("submit", function(event)   {
            // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var validate = $("#burger-name").val().trim();
    var newBurger = {
      burger_name: $("#burger-name").val().trim()
    };
    console.log(newBurger);
    // Send the POST request.
    if(validate === '' ){
        $('#error-message').text("Please Enter a Name for Your Burger");
        return;
    }
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