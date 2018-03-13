'use strict';
module.exports = (sequelize, DataTypes) => {
  var final = sequelize.define('final', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    route1: DataTypes.STRING,
    route2: DataTypes.STRING,
    time: DataTypes.INTEGER,
    driver: DataTypes.STRING,
    vehicle: DataTypes.STRING,
    status: DataTypes.STRING,
    startingtime:DataTypes.TIME,
    reachedtime:DataTypes.TIME
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return final;
};