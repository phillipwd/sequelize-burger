// var burger = {
//     all: function(cb) {
//       orm.all("burgers", function(res) {
//         cb(res);
//       });
//     },

//     create: function(cols, vals, cb) {
//       orm.create("burgers", cols, vals, function(res) {
//         cb(res);
//       });
//     },
//     update: function(objColVals, condition, cb) {
//       orm.update("burgers", objColVals, condition, function(res) {
//         cb(res);
//       });
//     },
//     delete: function(condition, cb) {
//       orm.delete("burgers", condition, function(res) {
//         cb(res);
//       });
//     }
//   };
  
  module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger",{
      burger_name : {
        type: DataTypes.STRING,
        allowNull: false
      },
      devour: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false      }
    });
    return Burger;
  };
  