'use strict';
module.exports = (sequelize, DataTypes) => {
  var place = sequelize.define('place', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    route1: DataTypes.STRING,
    route2: DataTypes.STRING,
    time:DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return place;
};