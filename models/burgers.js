var orm = require("../config/orm.js");

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res)  {
            //one of the 3 cbs called (Trev)
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb)    {
        orm.insertOne("burgers", cols, vals, function(res)  {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res)   {
            cb(res);
        });
    }
};
//Export for controller

module.exports = burgers;