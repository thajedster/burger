var connection = require("./connection");

var orm = {
    selectAll: function (tableInput, cb) {
        connection.query(`select * from ${tableInput};`, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: function (tableInput, value, cb) {
        connection.query(`insert into ${tableInput} (burger_name) values (${value});`, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (tableInput, condition, cb) {
        connection.query(`update ${tableInput} set devoured = true where id = ${condition};`, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}
module.exports = orm;