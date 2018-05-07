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
})