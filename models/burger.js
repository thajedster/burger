var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (res) {
            cb(res);
        });
    },

    updateOne: function (id, cb) {
        orm.updateOne('burgers', id, cb);
    },

    insertOne: function (value, cb) {
        orm.insertOne('burgers', value, cb);
    }
}

module.exports = burger;