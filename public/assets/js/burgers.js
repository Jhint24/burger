$(document).ready(function()   {

    $(".devour-this").on("click", function(event)   {
        var id = $(this).data("id");
        var newDevouredState = {
            devoured: true
        };
        //send Put request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevouredState
        }).then( function() {
            console.log(newDevouredState.devoured);
            //reload the page
            location.reload();
        })
    })
})