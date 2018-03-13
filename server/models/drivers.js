'use strict';
module.exports = (sequelize, DataTypes) => {
  var drivers = sequelize.define('drivers', {
    username: DataTypes.STRING,
    status: DataTypes.STRING,
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return drivers;
};