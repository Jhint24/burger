var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [tableInput], function(err, result)   {
            if (err) throw err;
            console.log(result)
            cb(result);
        });
    },
    insertOne: function()   {}
}

module.exports = orm;







// function selectAll()    {

// };

// function insertOne()    {

// };

// function updateOne()    {

// };
