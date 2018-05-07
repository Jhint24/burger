var connection = require("../config/connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result)   {
            if (err) throw err;
            console.log(result)
            cb(result);
        });
    
    },
    insertOne: function(table, cols, vals, cb)   {
        var queryString = "INSERT INTO ?? VALUES ?? = ?";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function(table, )
}

module.exports = orm;







// function selectAll()    {

// };

// function insertOne()    {

// };

// function updateOne()    {

// };
