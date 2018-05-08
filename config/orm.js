var connection = require("../config/connection.js");



var orm = {

    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result)   {
            if (err) throw err;
            console.log(result)
            //one of the 3 cbs called (Trev)
            cb(result);
        });
    
    },
    insertOne: function(table, cols, vals, cb)   {
        var queryString = "INSERT INTO ?? SET ?? = ?";
        connection.query(queryString, [table, cols, vals], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },

    updateOne: function(table, objColVals, condition, cb)   {
        var queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVals, condition], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
}

module.exports = orm;







// function selectAll()    {

// };

// function insertOne()    {

// };

// function updateOne()    {

// };
