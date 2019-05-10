var oms = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers_tbl", function(res) {
          cb(res);
        });
      },
      create: function(name, cb) {
        orm.create("burgers_tbl", [
          "burger_name", "devoured"
        ], [
          name, false
        ], cb);
      },
      update: function(id, cb) {
        var condition = "item_id=" + id;
        orm.update("burgers_tbl", {
          devoured: true
        }, condition, cb);
      }
};

module.exports = burger;

