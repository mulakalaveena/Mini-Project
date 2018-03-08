'use strict';
module.exports = (sequelize, DataTypes) => {
  var vehicles = sequelize.define('vehicles', {
    model: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vehicles;
};